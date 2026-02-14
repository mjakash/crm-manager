import { ArrowUp, ArrowDown, MoreVertical } from "lucide-react";

const stats = [
    { label: "Delivered", value: "42,642.1", trend: "+0.02%", trendUp: true, color: "bg-green-100 text-green-700" },
    { label: "Opened", value: "26,843", trend: "+0.02%", trendUp: false, color: "bg-red-100 text-red-700" }, // Image shows red pill for Opened trend
    { label: "Clicked", value: "525,753", trend: "+0.02%", trendUp: true, color: "bg-green-100 text-green-700" },
    { label: "Subscribe", value: "425", trend: "+0.02%", trendUp: true, color: "bg-green-100 text-green-700" },
];

export function PerformanceStats() {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Performance Over Time</h3>
                    <p className="text-sm text-gray-500">29 Sept, 2024</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="flex items-center gap-1">
                            <ArrowUp className="w-3 h-3" /> Short
                        </span>
                    </button>
                    <button className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                        Filter
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-gray-100">
                {stats.map((stat, index) => (
                    <div key={stat.label} className={`pl-8 first:pl-0 ${index !== 0 ? 'border-l border-gray-100' : ''}`}>
                        <p className="text-sm text-gray-500 mb-2">{stat.label}</p>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded flex items-center gap-0.5 ${stat.trendUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                {stat.trendUp ? <ArrowUp className="w-2 h-2" /> : <ArrowDown className="w-2 h-2" />}
                                {stat.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
