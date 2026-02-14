"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip, Cell } from "recharts";
import { ArrowUp, MoreVertical } from "lucide-react";

const data = [
    { name: "Jan", value: 78, label: "78%" },
    { name: "Feb", value: 34, label: "34%" },
    { name: "Mar", value: 67, label: "67%", active: true },
    { name: "Apr", value: 28, label: "28%" },
    { name: "May", value: 39, label: "39%" },
    { name: "Jun", value: 80, label: "80%" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-900 text-white text-xs py-1 px-2 rounded-lg shadow-xl">
                <p>{`${label}: ${payload[0].value}%`}</p>
            </div>
        );
    }

    return null;
};

export function CampaignChart() {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Campaign Performance</h3>
                    <div className="mt-1">
                        <span className="text-3xl font-bold text-gray-900 block">$24,747.01</span>
                        <div className="flex items-center gap-2 mt-1">
                            <p className="text-sm text-gray-500">29 Sept, 2024</p>
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-50 text-green-600 flex items-center gap-1">
                                <ArrowUp className="w-3 h-3" /> 12%
                            </span>
                            <span className="text-xs text-gray-400">vs last month</span>
                        </div>
                    </div>
                </div>
                <button className="p-1.5 text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                </button>
            </div>

            <div className="flex-1 w-full min-h-[200px] relative">
                {/* Average Line */}
                <div className="absolute top-[40%] left-0 right-0 border-t border-dashed border-gray-300 z-0"></div>
                <div className="absolute top-[36%] left-0 bg-gray-800 text-white text-[10px] px-2 py-0.5 rounded z-10">Avg $150k</div>

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barSize={40}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            dy={10}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                        <Bar dataKey="value" radius={[8, 8, 8, 8]}>
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.active ? '#FB923C' : '#F3F4F6'}
                                    className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
