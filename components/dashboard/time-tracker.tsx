import { ArrowUpRight, Play, Pause, Clock } from "lucide-react";

export function TimeTracker() {
    return (
        <div className="bg-white p-6 rounded-3xl h-full flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-start z-10">
                <h3 className="text-xl text-gray-800">Time tracker</h3>
                <button className="bg-white border border-gray-100 p-2 rounded-full hover:bg-gray-50 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </button>
            </div>

            <div className="flex items-center justify-center py-6 relative z-10">
                {/* Circular Progress (SVG) */}
                <div className="relative w-40 h-40">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="80"
                            cy="80"
                            r="70"
                            className="stroke-gray-100 fill-none"
                            strokeWidth="8"
                        />
                        <circle
                            cx="80"
                            cy="80"
                            r="70"
                            className="stroke-accent fill-none"
                            strokeWidth="8"
                            strokeDasharray="440"
                            strokeDashoffset="110" // 75% progress
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-light text-gray-800">02:35</span>
                        <span className="text-xs text-gray-400">Work Time</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 z-10">
                <button className="bg-white border border-gray-100 p-3 rounded-full text-gray-600 hover:bg-gray-50">
                    <Play className="w-4 h-4 fill-current" />
                </button>
                <button className="bg-white border border-gray-100 p-3 rounded-full text-gray-600 hover:bg-gray-50">
                    <Pause className="w-4 h-4 fill-current" />
                </button>
                <div className="flex-1"></div>
                <button className="bg-primary text-white p-3 rounded-full hover:bg-primary/90">
                    <Clock className="w-4 h-4" />
                </button>
            </div>

            {/* Background Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
    );
}
