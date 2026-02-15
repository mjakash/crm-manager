import { cn } from "@/lib/utils";

interface StatusBadgeProps {
    status: string;
    className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
    const getStyles = (status: string) => {
        switch (status.toLowerCase()) {
            case "active":
            case "approved":
            case "completed":
            case "resolved":
                return "bg-green-100 text-green-700 border-green-200";
            case "pending":
            case "in progress":
            case "open":
                return "bg-amber-100 text-amber-700 border-amber-200";
            case "inactive":
            case "rejected":
            case "closed":
                return "bg-red-100 text-red-700 border-red-200";
            default:
                return "bg-gray-100 text-gray-700 border-gray-200";
        }
    };

    return (
        <span
            className={cn(
                "px-2.5 py-1 rounded-full text-xs font-semibold border capitalize",
                getStyles(status),
                className
            )}
        >
            {status}
        </span>
    );
}
