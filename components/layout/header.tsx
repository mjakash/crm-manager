"use client";

import { Bell, Gift, Search, ChevronDown, Menu } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";
import { useSidebar } from "@/context/sidebar-context";

export function Header() {
    const { toggleMobileSidebar } = useSidebar();

    return (
        <header className="h-20 px-8 flex items-center justify-between border-b border-gray-100/50 bg-white/50 backdrop-blur-sm sticky top-0 z-10">

            {/* Mobile Trigger */}
            <button
                onClick={toggleMobileSidebar}
                className="sm:hidden p-2 mr-2 text-gray-500 hover:bg-gray-100 rounded-lg"
            >
                <Menu size={24} />
            </button>

            {/* Search */}
            <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-lg px-4 py-2 w-96 shadow-sm focus-within:ring-2 focus-within:ring-primary/5 focus-within:border-primary/20 transition-all">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-400 text-gray-700"
                />
                <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">⌘</span>
                    <span className="text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">K</span>
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-700 shadow-sm transition-colors">
                        <Gift className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-700 shadow-sm transition-colors relative">
                        <Bell className="w-5 h-5" strokeWidth={1.5} />
                        <span className="absolute top-2.5 right-3 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
                    </button>
                </div>

                <div className="h-8 w-px bg-gray-200"></div>

                <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-medium">
                        JP
                    </div>
                    <div className="text-left hidden sm:block">
                        <div className="text-sm font-medium text-gray-900 leading-none mb-1">James Passaquindici</div>
                        <div className="text-[10px] text-gray-500 leading-none">ID: 4827682</div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400 ml-2" />
                </button>
            </div>
        </header>
    );
}
