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

const step1schema = authSchema.forgotPassword.shape.step1;
type FormStep1Type = z.infer<typeof step1schema>;

const step2schema = authSchema.forgotPassword.shape.step2;
type FormStep2Type = z.infer<typeof step2schema>;

const Step1 = ({
  setStep,
  setStep1Values,
}: {
  setStep: (step: number) => void;
  setStep1Values: (values: FormStep1Type) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const form = useForm<FormStep1Type>({
    resolver: zodResolver(step1schema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: FormStep1Type) {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetcher("/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({
          step1: values,
        }),
      });

      // errors
      if (!res.ok) {
        const { code, errors, message } = res;

        if (
          (code === "validation-error" ||
            code === "conflict" ||
            code === "not-found") &&
          errors
        ) {
          setZodErrors<FormStep1Type>(errors, form);
          return;
        }

        toast.error(message);
        return;
      }

      const { message } = res;
      setStep1Values(values);
      toast.success(message);
      setStep(2);
    } catch (error) {
      console.error(`Error during reset password: ${error}`);
      return;
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 600);
    }
  }

  return (
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
        <Button
          loading={loading}
          disabled={loading}
          type="submit"
          className="w-full"
        >
          Send Code
        </Button>
        <div className="mt-4 text-center text-sm">
          Remember password?{" "}
          <Link href="/auth/login" className="underline underline-offset-4">
            Login
          </Link>
        </div>
      </form>
    </Form>
  );
};

const Step2 = ({ step1Values }: { step1Values: FormStep1Type }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<FormStep2Type>({
    resolver: zodResolver(step2schema),
    defaultValues: {
      code: "",
      password: "",
      password_confirmation: "",
    },
  });

  async function onSubmit(values: FormStep2Type) {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetcher("/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({
          step1: step1Values,
          step2: values,
        }),
      });

      // errors
      if (!res.ok) {
        const { code, errors, message } = res;

        if (
          (code === "validation-error" ||
            code === "conflict" ||
            code === "not-found") &&
          errors
        ) {
          setZodErrors<FormStep2Type>(errors, form);
          return;
        }

        toast.error(message);
        return;
      }

      const { message } = res;
      toast.success(message);
      router.push("/auth/login");
    } catch (error) {
      console.error(`Error during reset password: ${error}`);
      return;
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 600);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`${
          loading ? "pointer-events-none opacity-50" : ""
        } space-y-8`}
      >
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="000000"
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
              <FormLabel>New Password</FormLabel>
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
              <FormLabel>Confirm Password</FormLabel>
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
        <Button
          loading={loading}
          disabled={loading}
          type="submit"
          className="w-full"
        >
          Reset Password
        </Button>
        <div className="mt-4 text-center text-sm">
          Remember password?{" "}
          <Link href="/auth/login" className="underline underline-offset-4">
            Login
          </Link>
        </div>
      </form>
    </Form>
  );
};

const ForgotPasswordForm = () => {
  const [step, setStep] = useState(1);
  const [step1Values, setStep1Values] = useState<FormStep1Type>({
    email: "",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Reset Password</CardTitle>
        <CardDescription>
          Enter your email to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 ? (
          <Step1 {...{ setStep, setStep1Values }} />
        ) : (
          <Step2 step1Values={step1Values} />
        )}
      </CardContent>
    </Card>
  );
};

export default ForgotPasswordForm;
