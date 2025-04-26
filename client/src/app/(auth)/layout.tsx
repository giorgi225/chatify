import "@/app/globals.css";
import { Sen } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { Toaster } from "@/components/ui/sonner";

const sen = Sen({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sen.className} bg-gray-100`}>
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-lg">
            <div className="w-full flex flex-col gap-4">
              <Link href={"/auth/login"} className="mx-auto">
                <Image
                  src={`/logo.jpg`}
                  alt="logo"
                  width={50}
                  height={50}
                  className="w-full max-w-[80px] rounded-full shadow-sm"
                />
              </Link>
              {children}
            </div>
          </div>
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
