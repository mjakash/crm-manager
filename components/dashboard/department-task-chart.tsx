"use client";

import { useState } from "react";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
    { name: "Developers", Complete: 109, Pending: 32, Delay: 15 },
    { name: "MIS/PC", Complete: 30, Pending: 42, Delay: 10 },
    { name: "QA", Complete: 72, Pending: 201, Delay: 250 },
    { name: "IT", Complete: 153, Pending: 20, Delay: 5 },
    { name: "d_test2", Complete: 10, Pending: 5, Delay: 2 },
    { name: "DEPARTMENT", Complete: 55, Pending: 20, Delay: 10 },
    { name: "dp1", Complete: 12, Pending: 8, Delay: 4 },
    { name: "PMS", Complete: 80, Pending: 60, Delay: 40 },
    { name: "dp1111", Complete: 25, Pending: 25, Delay: 25 },
    { name: "kol dep", Complete: 40, Pending: 30, Delay: 20 },
    { name: "sales", Complete: 60, Pending: 40, Delay: 10 },
    { name: "support", Complete: 90, Pending: 10, Delay: 5 },
    { name: "fghfgh", Complete: 5, Pending: 5, Delay: 5 },
];

export function DepartmentTaskChart() {
    const [period, setPeriod] = useState('30');

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">DEPARTMENT-WISE TASK</h3>
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

            <div className="flex-1 min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barSize={6}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: "#9CA3AF" }}
                            interval={0}
                            angle={-45}
                            textAnchor="end"
                            height={60}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: "#9CA3AF" }}
                        />
                        <Tooltip
                            cursor={{ fill: '#F3F4F6' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                        />
                        <Legend iconType="square" iconSize={8} wrapperStyle={{ fontSize: '12px' }} />
                        <Bar dataKey="Complete" fill="#60A5FA" radius={[2, 2, 0, 0]} /> {/* Blue 400 */}
                        <Bar dataKey="Pending" fill="#3B82F6" radius={[2, 2, 0, 0]} /> {/* Blue 500 */}
                        <Bar dataKey="Delay" fill="#F97316" radius={[2, 2, 0, 0]} /> {/* Orange 500 */}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
