"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell, LabelList } from "recharts";

const data = [
    { name: "> 80%\nNo. Doers 5", value: 5, color: "#3B82F6" }, // Blue
    { name: "60% - 79%\nNo. Doers 1", value: 1, color: "#3B82F6" },
    { name: "< 60%\nNo. Doers 14", value: 14, color: "#3B82F6" },
];

export function DoerPerformanceReport() {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col">
            <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">DOER PERFORMANCE REPORT (LAST MONTH)</h3>
            </div>

            <div className="flex-1 min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barSize={32}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: "#9CA3AF" }}
                            interval={0}
                            height={50} // Give space for wrapped text
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: "#9CA3AF" }}
                        />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                        />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
