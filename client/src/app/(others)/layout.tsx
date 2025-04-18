import "../globals.css";
import { Sen } from "next/font/google";

import { AuthProvider } from "@/providers/auth.provider";

import Aside from "@/components/common/aside";
import Header from "@/components/common/header";
import { Toaster } from "@/components/ui/sonner";

import getSession from "@/lib/session";

import type { Metadata } from "next";

const sen = Sen({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Chatify",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html lang="en">
      <body className={`${sen.className} antialiased flex h-screen bg-gray-50`}>
        <AuthProvider session={session}>
          <div className="w-full flex-1 h-full flex flex-col overflow-hidden">
            <Header />
            <div className="w-full flex-1 flex overflow-hidden">
              <Aside />
              <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
            </div>
          </div>
        </AuthProvider>

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
