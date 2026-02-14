import { ArrowUpRight } from "lucide-react";

const data = [
    { day: "S", value: 30, active: false },
    { day: "M", value: 45, active: false },
    { day: "T", value: 35, active: false },
    { day: "W", value: 60, active: false },
    { day: "T", value: 75, active: false },
    { day: "F", value: 50, active: true }, // Highlighted in image
    { day: "S", value: 20, active: false },
];

export function ProgressChart() {
    return (
        <div className="bg-white p-6 rounded-3xl h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <h3 className="text-xl text-gray-800">Progress</h3>
                <button className="bg-white border border-gray-100 p-2 rounded-full hover:bg-gray-50 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </button>
            </div>

            <div className="mt-4">
                <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-4xl font-light text-gray-800">6.1 h</span>
                    <span className="text-sm text-gray-400">Work Time<br />this week</span>
                </div>

                <div className="flex justify-between items-end h-32 px-2">
                    {data.map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-3">
                            {item.active && (
                                <div className="mb-2 bg-accent text-primary text-xs font-medium px-2 py-1 rounded-lg">
                                    5h 23m
                                </div>
                            )}
                            <div className="w-1.5 h-full bg-gray-100 rounded-full relative overflow-hidden group">
                                <div
                                    className={`absolute bottom-0 w-full rounded-full transition-all duration-500 ${item.active ? 'bg-accent h-[65%]' : 'bg-primary h-[40%]'}`}
                                    style={{ height: `${item.value}%` }}
                                />
                            </div>
                            <span className="text-xs text-gray-400">{item.day}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
