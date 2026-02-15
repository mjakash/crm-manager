"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { useState } from "react";

const data = [
    { name: "Complete", value: 90.4, color: "#34D399" }, // Emerald 400
    { name: "Pending", value: 9.6, color: "#FBBF24" }, // Amber 400
];

export function WeeklyTaskChart() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col relative">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-gray-900">Weekly Task Chart</h3>
                {/* Toggle Switch */}
                <div
                    className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors duration-300 ${enabled ? 'bg-primary' : 'bg-gray-200'}`}
                    onClick={() => setEnabled(!enabled)}
                >
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${enabled ? 'left-5' : 'left-0.5'}`}></div>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center relative">
                <div className="absolute right-0 top-4 space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-[#34D399] rounded-sm"></div>
                        <span className="text-[10px] text-gray-500">Complete</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-[#FBBF24] rounded-sm"></div>
                        <span className="text-[10px] text-gray-500">Pending</span>
                    </div>
                </div>

                <div className="w-32 h-32 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={0} // Filled Pie
                                outerRadius={60}
                                dataKey="value"
                                startAngle={90}
                                endAngle={-270}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                                ))}
                                <Label
                                    value="90.4%"
                                    position="center"
                                    className="text-xs font-bold fill-white"
                                />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-white text-xs font-bold">
                        90.4%
                    </div>
                </div>
            </div>
        </div>
    );
}

