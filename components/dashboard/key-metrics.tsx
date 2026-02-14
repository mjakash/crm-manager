import { Users, UserPlus, FolderKanban } from "lucide-react";

const metrics = [
    { label: "Employe", value: "78", icon: Users },
    { label: "Hirings", value: "56", icon: UserPlus },
    { label: "Projects", value: "203", icon: FolderKanban },
];

export function KeyMetrics() {
    return (
        <div className="flex items-end justify-end gap-12 pb-4">
            {metrics.map((metric) => (
                <div key={metric.label} className="text-center group cursor-pointer">
                    <div className="flex items-center justify-center gap-3 mb-1">
                        <div className="p-2 bg-transparent group-hover:bg-white/50 rounded-full transition-colors">
                            <metric.icon className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                        </div>
                        <span className="text-5xl font-light text-foreground">{metric.value}</span>
                    </div>
                    <span className="text-sm text-gray-500">{metric.label}</span>
                </div>
            ))}
        </div>
    );
}
