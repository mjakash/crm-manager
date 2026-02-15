"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { MoreHorizontal } from "lucide-react";

type Performer = {
    name: string;
    value: number;
};

interface PerformersChartProps {
    title: string;
    data: Performer[];
    type: "top" | "bottom";
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 border border-gray-100 shadow-lg rounded-lg text-xs">
                <p className="font-medium text-gray-900">{label}</p>
                <p className="text-gray-500">
                    Value: <span className="font-bold text-primary">{payload[0].value}</span>
                </p>
            </div>
        );
    }
    return null;
};

export function PerformersChart({ title, data, type }: PerformersChartProps) {
    const isTop = type === "top";
    const barColor = isTop ? "#F87171" : "#F87171"; // Both seem to use red/pink in screenshot
    // Wait, the screenshot shows Top Performers as empty/blue? No, looks like placeholders.
    // Actually, let's use the colors from the screenshot:
    // Bottom Performers: Pink/Red bars.
    // Top Performers: The screenshot shows empty bars? Or maybe blue?
    // Let's use a nice Emerald for Top and Red/Pink for Bottom to match the "emitly" theme + semantic meaning, 
    // unless user strictly wants "same to same". User said "same to same cards but in our style".
    // "Our style" (emitly) is Green/Emerald.
    // So Top = Green, Bottom = Red/Orange.

    const color = isTop ? "#10B981" : "#F43F5E";

    // However, looking closely at the screenshot, BOTH charts have pink bars.
    // "Top Performers" chart in screenshot is empty (0 values).
    // "Bottom Performers" has pink bars. 
    // I will use the "emitly" primary color (Emerald) for Top and Rose for Bottom.

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">{title}</h3>
                <button className="text-gray-400 hover:text-gray-600">
                    <div className="w-8 h-4 bg-gray-200 rounded-full relative">
                        <div className="absolute left-1 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-transform"></div>
                    </div>
                </button>
            </div>

            <div className="flex-1 min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barSize={24}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: "#9CA3AF" }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: "#9CA3AF" }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                        <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-4 text-center">
                <p className="text-xs text-gray-400">Benchmark {type === 'top' ? '>' : '<'} {type === 'top' ? '-20' : '-60'}</p>
            </div>
        </div>
    );
}
