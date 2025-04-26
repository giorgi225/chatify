import { redirect } from "next/navigation";

import VerifyEmailForm from "@/components/forms/verifyEmail";

import fetcher from "@/lib/fetcher";


type Props = {
  searchParams: Promise<{ email: string }>;
};
const page = async ({ searchParams }: Props) => {
  const query = await searchParams;
  try {
    const res = await fetcher<{ resetTime: Date | null }>(
      "/auth/get-email-verification-limit-info",
      {
        method: "POST",
        body: JSON.stringify({
          email: query.email,
        }),
      }
    );

    if (!res.ok) {
      return redirect("/auth/login");
    }

    return (
      <VerifyEmailForm email={query.email} resetTime={res.data.resetTime} />
    );
  } catch (error) {
    console.error(error);
    return redirect("/auth/login");
  }
};

export default page;
