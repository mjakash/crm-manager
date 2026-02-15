"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navItems } from "@/config/navigation";
import { ChevronDown, ChevronRight, LogOut, Box, ChevronLeft } from "lucide-react";
// import { useSidebar } from "@/context/sidebar-context"; // Already imported below? No, need to keep it.

import { useSidebar } from "@/context/sidebar-context";

export function Sidebar() {
    const pathname = usePathname();
    const { isDesktopCollapsed, toggleDesktopSidebar } = useSidebar();
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

    // Load state from localStorage on mount
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
        if (isDesktopCollapsed) return; // Don't toggle sections when collapsed
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

    return (
        <aside className={`
            bg-white h-full flex flex-col border-r border-gray-100 dark:border-gray-800 font-sans transition-all duration-300 relative flex-shrink-0 z-20 shadow-xl
            ${isDesktopCollapsed ? 'w-20' : 'w-64'}
        `}>
            {/* Toggle Button */}
            <button
                onClick={toggleDesktopSidebar}
                className="absolute -right-3 top-8 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-gray-600 z-50"
            >
                {isDesktopCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>

            <div className="p-6 flex-1 overflow-y-auto overflow-x-hidden min-h-0">
                <div className={`flex items-center gap-2 mb-8 ${isDesktopCollapsed ? 'justify-center' : ''}`}>
                    {isDesktopCollapsed ? (
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">E</div>
                    ) : (
                        <h1 className="text-2xl font-bold text-primary tracking-tight">Flow Core</h1>
                    )}
                </div>

                {/* Workspace Selector */}
                <div className={`mb-8 p-3 bg-gray-50 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors ${isDesktopCollapsed ? 'justify-center p-2' : ''}`}>
                    <div className="w-8 h-8 bg-white rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
                        <Box size={16} className="text-gray-500" />
                    </div>
                    {!isDesktopCollapsed && (
                        <>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-900 truncate">My Workspace</div>
                                <div className="text-xs text-gray-500">Free plan</div>
                            </div>
                            <div className="text-gray-400">
                                <ChevronDown size={14} />
                            </div>
                        </>
                    )}
                </div>

                <nav className="space-y-1">
                    {navItems.map((item) => {
                        const active = isActive(item.href);
                        const hasChildren = item.children && item.children.length > 0;
                        const isOpen = openSections[item.name];

                        return (
                            <div key={item.name}>
                                <div
                                    className={`group flex items-center ${isDesktopCollapsed ? 'justify-center' : 'justify-between'} px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${active || (hasChildren && isOpen && !isDesktopCollapsed)
                                        ? 'bg-gray-50 text-gray-900'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                    onClick={() => hasChildren ? toggleSection(item.name) : null}
                                    title={isDesktopCollapsed ? item.name : undefined}
                                >
                                    <Link
                                        href={item.children ? '#' : item.href}
                                        className={`flex items-center gap-3 ${isDesktopCollapsed ? 'justify-center' : 'flex-1'}`}
                                        onClick={(e) => hasChildren && e.preventDefault()}
                                    >
                                        <item.icon size={20} strokeWidth={1.5} className={active ? 'text-[#1A2E05]' : 'text-gray-400 group-hover:text-gray-600'} />
                                        {!isDesktopCollapsed && item.name}
                                    </Link>
                                    {!isDesktopCollapsed && hasChildren && (
                                        <div className="text-gray-400">
                                            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                        </div>
                                    )}
                                </div>

                                {!isDesktopCollapsed && hasChildren && isOpen && (
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
                <div className={`flex items-center gap-3 ${isDesktopCollapsed ? 'justify-center' : ''}`}>
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative border border-gray-100 flex-shrink-0">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium text-sm">JP</div>
                    </div>
                    {!isDesktopCollapsed && (
                        <>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-900 truncate">James Passaquindici</div>
                                <div className="text-xs text-gray-500 truncate">jamespass@emi.com</div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100 transition-colors">
                                <LogOut size={18} />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </aside>
    );
}

