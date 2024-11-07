'use client'

import { inter } from "./ui/fonts";
import "./globals.css";
import Heading from "./ui/heading";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const isLoginPage = pathname === "/";

  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >

        {!isLoginPage && <Heading>{children}</Heading>}
      </body>
    </html>
  );
}
