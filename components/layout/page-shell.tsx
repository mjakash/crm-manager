import { ChevronRight, Home } from "lucide-react";

interface PageShellProps {
    children: React.ReactNode;
    className?: string;
    breadcrumb?: string[];
}

export function PageShell({ children, className = "", breadcrumb }: PageShellProps) {
    return (
        <div className={`flex-1 px-6 py-6 overflow-y-auto custom-scrollbar ${className}`}>
            {breadcrumb && (
                <nav className="flex items-center text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2">
                        <li className="inline-flex items-center">
                            <a href="#" className="inline-flex items-center hover:text-blue-600">
                                <Home size={14} className="mr-1" />
                            </a>
                        </li>
                        {breadcrumb.map((item, index) => (
                            <li key={index}>
                                <div className="flex items-center">
                                    <ChevronRight size={14} className="text-gray-400 mx-1" />
                                    <span className={`font-medium ${index === breadcrumb.length - 1 ? 'text-gray-900' : 'hover:text-blue-600'}`}>
                                        {item}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </nav>
            )}
            {children}
        </div>
    );
}
