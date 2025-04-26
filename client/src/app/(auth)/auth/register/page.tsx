import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/registerForm";

import fetcher from "@/lib/fetcher";

import { UserType } from "@/types/types";

type Props = {
  searchParams: Promise<{ invitation: string }>;
};

const page = async ({ searchParams }: Props) => {
  const token = (await searchParams).invitation;

  if (!token) {
    return <RegisterForm />;
  }

  try {
    const res = await fetcher<{ email: string; inviter: UserType }>(
      "/user/validate-invitation",
      {
        method: "POST",
        body: JSON.stringify({ token }),
      }
    );
    if (!res.ok) {
      return redirect("/auth/register");
    }

    const invitation = {
      ...res.data,
      token,
    };
    return <RegisterForm invitation={invitation} />;
  } catch (error) {
    console.error(error);
    return redirect("/auth/register");
  }
};

export default page;
