"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

interface TaskDistributionProps {
    title: string;
    data: {
        name: string;
        value: number;
        color: string;
    }[];
    totalLabel?: string;
}

export function TaskDistribution({ title, data, totalLabel = "Total" }: TaskDistributionProps) {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const [period, setPeriod] = useState('30');

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">{title}</h3>
                <div className="flex gap-2">
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        {['7', '30', '1'].map((p) => (
                            <button
                                key={p}
                                onClick={() => setPeriod(p)}
                                className={`px-2 py-0.5 text-xs font-medium rounded-md transition-all cursor-pointer ${period === p
                                    ? 'bg-white shadow-sm text-gray-900'
                                    : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex-1 min-h-[200px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                            ))}
                            <Label
                                value={total.toLocaleString()}
                                position="center"
                                className="text-2xl font-bold fill-gray-900"
                            />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Text Overlay if Label doesn't render nicely or needs more customization */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        {/* Visual hack to center text if needed, relying on Recharts Label mostly */}
                    </div>
                </div>
            </div>

            <div className="mt-4 flex justify-center gap-6">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500">{item.name}</span>
                            <span className="text-sm font-bold text-gray-900">{item.value}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
