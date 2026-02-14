import { ChevronLeft, ChevronRight, MoreVertical, Zap } from "lucide-react";

const days = [
    { day: "Mon", date: "15" },
    { day: "Tue", date: "16" },
    { day: "Wed", date: "17" },
    { day: "Thu", date: "18" },
    { day: "Fri", date: "19", active: true },
    { day: "Sat", date: "20" },
    { day: "Sun", date: "21" },
];

const events = [
    {
        id: 1,
        title: "Element of Design Test",
        time: "10:00 - 11:00 AM",
        color: "bg-[#FCD34D]",
        icon: true
    },
    {
        id: 2,
        title: "Design Principle Test",
        time: "10:00 - 11:00 AM",
        color: "bg-[#F0ABFC]", // Pink/Purple
        icon: true
    }
];

export function ScheduleTimeline() {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Schedule Campaign</h3>
                <div className="flex gap-2">
                    <button className="p-1 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="p-1 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <p className="text-sm font-medium text-gray-600 mb-4">September 2024</p>

            {/* Calendar Header */}
            <div className="grid grid-cols-7 gap-1 text-center mb-6">
                {days.map((d) => (
                    <div key={d.date} className={`flex flex-col items-center gap-2 py-2 rounded-xl cursor-pointer transition-colors ${d.active ? 'bg-purple-50' : 'hover:bg-gray-50'}`}>
                        <span className="text-xs text-gray-400">{d.day}</span>
                        <span className={`text-sm font-medium w-8 h-8 flex items-center justify-center rounded-full ${d.active ? 'bg-purple-600 text-white shadow-md' : 'text-gray-900'}`}>{d.date}</span>
                    </div>
                ))}
            </div>

            <div className="flex-1 space-y-6">
                <div className="relative pl-4 border-l border-dashed border-gray-200 space-y-6">
                    <div className="absolute top-0 left-0 w-2 h-2 -ml-[5px] rounded-full bg-gray-300"></div>

                    <div className="space-y-4">
                        <span className="text-xs text-gray-400 block -mt-5 mb-2 ml-2">Today</span>

                        {/* Event 1 */}
                        <div className="bg-[#FCD34D]/20 p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-[#FCD34D]/30 transition-colors border border-[#FCD34D]/20">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/50 flex items-center justify-center text-gray-600">
                                    <Zap className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900">Element of Design Test</h4>
                                    <p className="text-xs text-gray-500">10:00 - 11:00 AM</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <span className="text-xs text-gray-400 block mb-2 ml-2">Sat, Jan 20</span>
                        <div className="absolute top-[55%] left-0 w-2 h-2 -ml-[5px] rounded-full bg-gray-300"></div>

                        {/* Event 2 */}
                        <div className="bg-[#F0ABFC]/20 p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-[#F0ABFC]/30 transition-colors border border-[#F0ABFC]/20">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/50 flex items-center justify-center text-gray-600">
                                    <Zap className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900">Design Principle Test</h4>
                                    <p className="text-xs text-gray-500">10:00 - 11:00 AM</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 -ml-[5px] rounded-full bg-gray-300"></div>
                    <span className="text-xs text-gray-400 block ml-2">Sat, Jan 20</span>
                </div>
            </div>

            {/* Floating Action Button for Chat */}
            <button className="absolute bottom-6 right-6 w-12 h-12 bg-[#064E3B] rounded-full flex items-center justify-center text-white shadow-lg shadow-green-900/20 hover:scale-105 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>
        </div>
    );
}
