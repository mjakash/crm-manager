import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emitly - Campaign Dashboard",
  description: "Manage your marketing campaigns efficiently.",
};

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
        <div className="flex h-screen w-full bg-[#F3F4F6]">
          <Sidebar />
          <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar bg-[#F9FAFB] m-2 rounded-3xl shadow-sm border border-gray-200/50">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
