import Link from "next/link";
import { Home, PlusSquare, Settings, Users, Zap, Box, Bot, Database, LogOut } from "lucide-react";

const navItems = [
    { name: "Overview", href: "#", icon: Home, active: true },
    { name: "Create campaign", href: "#", icon: PlusSquare, active: false },
    { name: "Automation", href: "#", icon: Zap, active: false },
    { name: "Subscriptions", href: "#", icon: Box, active: false },
    { name: "AI Chatbot", href: "#", icon: Bot, active: false },
    { name: "Integrations", href: "#", icon: Database, active: false },
];

export function Sidebar() {
    return (
        <aside className="w-64 bg-white h-full flex flex-col border-r border-gray-100 dark:border-gray-800">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-8">
                    <h1 className="text-2xl font-bold text-primary tracking-tight">emitly</h1>
                </div>

                {/* Workspace Selector */}
                <div className="mb-8 p-3 bg-gray-50 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                        <Box size={16} className="text-gray-500" />
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">My Workspace</div>
                        <div className="text-xs text-gray-500">Free plan</div>
                    </div>
                    <div className="text-gray-400">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <nav className="space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${item.active
                                    ? 'bg-[#BEF264] text-[#1A2E05] shadow-sm'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <item.icon size={20} strokeWidth={1.5} className={item.active ? 'text-[#1A2E05]' : 'text-gray-400 group-hover:text-gray-600'} />
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="mt-auto p-6 border-t border-gray-50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                        {/* Placeholder for user avatar */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">JP</div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">James Passaquindici</div>
                        <div className="text-xs text-gray-500 truncate">jamespass@emi.com</div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                        <LogOut size={16} />
                    </button>
                </div>
            </div>
        </aside>
    );
}
