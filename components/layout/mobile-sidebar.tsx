"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navItems } from "@/config/navigation";
import { ChevronDown, ChevronRight, LogOut, Box, Menu, X } from "lucide-react";
import Link from "next/link";

import { useSidebar } from "@/context/sidebar-context";

export function MobileSidebar() {
    const pathname = usePathname();
    const { isMobileOpen, closeMobileSidebar } = useSidebar();
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

    // Load state from localStorage on mount (share state with Desktop sidebar)
    useEffect(() => {
        const saved = localStorage.getItem("sidebarOpenSections");
        if (saved) {
            try {
                setOpenSections(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse sidebar state", e);
            }
        }
    }, []);

    const toggleSection = (name: string) => {
        setOpenSections(prev => {
            const newState = {
                [name]: !prev[name]
            };
            localStorage.setItem("sidebarOpenSections", JSON.stringify(newState));
            return newState;
        });
    };

    const isActive = (href: string) => {
        if (href === "#") return false;
        return pathname === href;
    };

    // Close sidebar on path change
    useEffect(() => {
        closeMobileSidebar();
    }, [pathname]);

    return (
        <div className="sm:hidden">
            {/* Trigger Button */}


            {/* Overlay */}
            {isMobileOpen && (
                <div className="fixed inset-0 z-50 flex">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                        onClick={closeMobileSidebar}
                    />

                    {/* Sidebar Drawer */}
                    <aside className="relative w-[280px] h-full bg-white flex flex-col shadow-2xl animate-in slide-in-from-left-64 duration-300">

                        {/* Close Button */}
                        <div className="absolute top-4 right-4 z-10">
                            <button
                                onClick={closeMobileSidebar}
                                className="p-1 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-4 flex-1 overflow-y-auto min-h-0">
                            <div className="flex items-center gap-2 mb-6">
                                <h1 className="text-2xl font-bold text-primary tracking-tight">Flow Core</h1>
                            </div>

                            {/* Workspace Selector */}
                            <div className="mb-6 p-3 bg-gray-50 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors">
                                <div className="w-8 h-8 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                                    <Box size={16} className="text-gray-500" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-gray-900 truncate">My Workspace</div>
                                    <div className="text-xs text-gray-500">Free plan</div>
                                </div>
                                <div className="text-gray-400">
                                    <ChevronDown size={14} />
                                </div>
                            </div>

                            <nav className="space-y-1 pb-10">
                                {navItems.map((item) => {
                                    const active = isActive(item.href);
                                    const hasChildren = item.children && item.children.length > 0;
                                    const isOpen = openSections[item.name];

                                    return (
                                        <div key={item.name}>
                                            <div
                                                className={`group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${active || (hasChildren && isOpen)
                                                    ? 'bg-gray-50 text-gray-900'
                                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                                    }`}
                                                onClick={() => hasChildren ? toggleSection(item.name) : null}
                                            >
                                                <Link
                                                    href={item.children ? '#' : item.href}
                                                    className="flex items-center gap-3 flex-1"
                                                    onClick={(e) => hasChildren && e.preventDefault()}
                                                >
                                                    <item.icon size={20} strokeWidth={1.5} className={active ? 'text-[#1A2E05]' : 'text-gray-400 group-hover:text-gray-600'} />
                                                    {item.name}
                                                </Link>
                                                {hasChildren && (
                                                    <div className="text-gray-400">
                                                        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                                    </div>
                                                )}
                                            </div>

                                            {hasChildren && isOpen && (
                                                <div className="mt-1 ml-4 space-y-1 pl-4 border-l border-gray-100">
                                                    {item.children?.map((child) => {
                                                        const childActive = isActive(child.href);
                                                        return (
                                                            <Link
                                                                key={child.name}
                                                                href={child.href}
                                                                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${childActive
                                                                    ? 'bg-[#BEF264] text-[#1A2E05] shadow-sm'
                                                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                                                    }`}
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </nav>
                        </div>

                        <div className="p-6 border-t border-gray-50 bg-white z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative border border-gray-100">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium text-sm">JP</div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-gray-900 truncate">James Passaquindici</div>
                                    <div className="text-xs text-gray-500 truncate">jamespass@emi.com</div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100 transition-colors">
                                    <LogOut size={18} />
                                </button>
                            </div>
                        </div>

                    </aside>
                </div>
            )}
        </div>
    );
}
