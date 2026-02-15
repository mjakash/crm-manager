"use client";

import { createContext, useContext, useEffect, useState } from "react";

type SidebarContextType = {
    isMobileOpen: boolean;
    isDesktopCollapsed: boolean;
    toggleMobileSidebar: () => void;
    toggleDesktopSidebar: () => void;
    closeMobileSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

    // Load desktop state from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("sidebarDesktopCollapsed");
        if (saved) {
            setIsDesktopCollapsed(JSON.parse(saved));
        }
    }, []);

    const toggleMobileSidebar = () => setIsMobileOpen((prev) => !prev);

    const closeMobileSidebar = () => setIsMobileOpen(false);

    const toggleDesktopSidebar = () => {
        setIsDesktopCollapsed((prev) => {
            const newState = !prev;
            localStorage.setItem("sidebarDesktopCollapsed", JSON.stringify(newState));
            return newState;
        });
    };

    return (
        <SidebarContext.Provider
            value={{
                isMobileOpen,
                isDesktopCollapsed,
                toggleMobileSidebar,
                toggleDesktopSidebar,
                closeMobileSidebar,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
}
