"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Navigation03Icon } from "hugeicons-react";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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


type FormType = z.infer<typeof authSchema.verifyEmail>;
const schema = authSchema.verifyEmail;

type Props = {
  email: string;
  resetTime: Date | null;
};

const VerifyEmailForm = ({ email, resetTime }: Props) => {
  const router = useRouter();

  const [timeLeft, setTimeLeft] = useState(0);
  const [timeToReset, setTimeToReset] = useState<Date | null>(resetTime);

  const [codeSending, setCodeSending] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    if (!timeToReset) return;

    const update = () => {
      const now = new Date();
      const diff = new Date(timeToReset).getTime() - now.getTime();

      setTimeLeft(diff > 0 ? diff : 0);
      if (diff <= 0) {
        setTimeToReset(null);
      }
    };

    update(); // initial call
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval); // cleanup
  }, [timeToReset]);

  const formattedCooldown = `${Math.floor(timeLeft / 60000)}:${String(
    Math.floor((timeLeft % 60000) / 1000)
  ).padStart(2, "0")}`;

  const form = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email,
      code: "",
    },
  });

  const sendCode = async () => {
    if (codeSending || timeToReset) return;
    setCodeSending(true);

    try {
      const res = await fetcher<{ resetTime: Date | null }>(
        "/auth/send-email-verification",
        {
          method: "POST",
          body: JSON.stringify({ email }),
        }
      );

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
      const { message, data } = res;

      setTimeToReset(data.resetTime);
      toast.success(message);
    } catch (error) {
      console.error(error);
      toast.error(`Something went wrong while register`);
      return;
    } finally {
      setTimeout(() => {
        setCodeSending(false);
      }, 600);
    }
  };

  async function onSubmit(values: FormType) {
    if (loading) return;
    setLoading(true);

    let isRedirecting = false;

    try {
      const res = await fetcher<UserType>("/auth/verify-email", {
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
      setTimeout(() => {
        router.push(`/`);
      }, 600);
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
        <CardTitle className="text-2xl">Verify Email</CardTitle>
        <CardDescription>Please verify your email to continue.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`${
              loading || codeSending ? "pointer-events-none opacity-50" : ""
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
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Code</FormLabel>
                    <button
                      onClick={() => sendCode()}
                      role="button"
                      type="button"
                      disabled={codeSending}
                      className={`${
                        timeToReset ? "text-foreground" : "text-green-500"
                      } ml-auto flex items-center gap-1 text-sm`}
                    >
                      {timeToReset ? (
                        <>
                          resend in: <strong>{formattedCooldown}</strong>
                        </>
                      ) : codeSending ? (
                        <>
                          <Loader className="animate-spin size-4" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Navigation03Icon className="size-4" />
                          Send Code
                        </>
                      )}
                    </button>
                  </div>
                  <FormControl>
                    <Input
                      placeholder="000000"
                      {...field}
                      disabled={loading || codeSending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              loading={loading}
              disabled={loading}
              type="submit"
              className="w-full"
            >
              Verify
            </Button>
            <div className="mt-4 text-center text-sm">
              <Link href="/auth/login" className="underline underline-offset-4">
                Go Back to Login
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default VerifyEmailForm;
