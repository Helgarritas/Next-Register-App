import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
// import { BreadComp } from "./dashboard/(overview)/components/breadComp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider
        >
          <AppSidebar/>
          <main className="w-full mx-4">
            <div className="py-5 flex gap-3 items-center">
              <SidebarTrigger/>
              {/* <BreadComp/> */}
            </div>
            {children}
          </main>
        </SidebarProvider>       
      </body>
    </html>
  );
}
