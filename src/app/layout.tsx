import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import { twMerge } from "tailwind-merge";
=======
import clsx from "clsx";
// import { twMerge } from "tailwind-merge";
>>>>>>> temp-fix

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
