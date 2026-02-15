import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flow Core - Campaign Dashboard",
  description: "Manage your marketing campaigns efficiently.",
};

import { Header } from "@/components/layout/header";

import { SidebarProvider } from "@/context/sidebar-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-gray-100 text-foreground overflow-hidden`}
      >
        <SidebarProvider>
          <div className="flex h-screen w-full bg-[#F3F4F6]">
            <MobileSidebar />
            <Sidebar />
            <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
              <Header />
              {/* Main Content Area */}
              <div className="flex-1 overflow-hidden bg-[#F9FAFB] m-2 mt-0 rounded-3xl shadow-sm border border-gray-200/50 relative flex flex-col">
                {children}
              </div>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
