import Image from "next/image";

const days = [
    { day: "Mon", date: "22" },
    { day: "Tue", date: "23" },
    { day: "Wed", date: "24", active: true },
    { day: "Thu", date: "25" },
    { day: "Fri", date: "26" },
    { day: "Sat", date: "27" },
];

const times = ["8:00 am", "9:00 am", "10:00 am", "11:00 am"];

export function CalendarSchedule() {
    return (
        <div className="bg-[#FDFBF7] rounded-3xl h-full flex flex-col pt-4">
            {/* Header Tabs */}
            <div className="flex justify-between items-center mb-6 px-4">
                <button className="bg-white px-4 py-1 rounded-full text-xs font-medium text-gray-500 shadow-sm">August</button>
                <h3 className="text-gray-800 font-medium">September 2024</h3>
                <button className="bg-white px-4 py-1 rounded-full text-xs font-medium text-gray-500 shadow-sm">October</button>
            </div>

            {/* Days Header */}
            <div className="grid grid-cols-[80px_1fr] mb-4">
                <div></div> {/* Time col spacer */}
                <div className="grid grid-cols-6 gap-2 text-center">
                    {days.map((d, i) => (
                        <div key={i} className={`flex flex-col items-center gap-1 ${d.active ? 'opacity-100' : 'opacity-40'}`}>
                            <span className="text-xs text-gray-500 uppercase">{d.day}</span>
                            <span className="text-lg font-medium text-gray-800">{d.date}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Timeline Grid */}
            <div className="flex-1 overflow-y-auto relative">
                <div className="space-y-8 pl-4">
                    {times.map((t, i) => (
                        <div key={i} className="grid grid-cols-[80px_1fr] items-start h-12">
                            <span className="text-xs text-gray-400 -mt-2">{t}</span>
                            <div className="border-t border-gray-200 border-dashed w-full h-full relative">
                                {/* Events positioned absolutely */}
                                {t === "9:00 am" && (
                                    <div className="absolute top-2 left-[20%] w-[40%] bg-primary text-white p-3 rounded-2xl shadow-lg z-10 flex items-center justify-between">
                                        <div>
                                            <div className="text-xs font-medium mb-0.5">Weekly Team Sync</div>
                                            <div className="text-[10px] text-white/60">Discuss progress on projects</div>
                                        </div>
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-primary"></div>
                                            <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-primary"></div>
                                            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-primary"></div>
                                        </div>
                                    </div>
                                )}
                                {t === "11:00 am" && (
                                    <div className="absolute top-2 left-[55%] w-[40%] bg-white border border-gray-100 p-3 rounded-2xl shadow-sm z-10 flex items-center justify-between">
                                        <div>
                                            <div className="text-xs font-medium text-gray-800 mb-0.5">Onboarding Session</div>
                                            <div className="text-[10px] text-gray-400">Introduction for new hires</div>
                                        </div>
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                                        </div>
                                    </div>
                                )}
                                {/* Vertical Lines for days */}
                                <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
                                    {[...Array(6)].map((_, j) => (
                                        <div key={j} className="border-l border-gray-100 h-full border-dashed mx-auto"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
