import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/components/providers/modal-provider";
import { Socket } from "socket.io";
import SocketProvider from "@/components/providers/socket-provider";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live Buddies",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
         
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem = {true} storageKey="buddies-theme">
              <SocketProvider>
                  <ModalProvider/>
                {children}
            </SocketProvider>
          </ThemeProvider>
         
        </body>
      </html>
    </ClerkProvider>
  );
}