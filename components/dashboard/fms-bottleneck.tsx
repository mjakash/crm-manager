"use client";

import { useState } from "react";

const bottlenecks = [
    { fmsName: "I brand Food process(By Suprakash)", doer: "Shilpi Das", step: "Step 1", delay: "141:49:01" },
    { fmsName: "PURCHASE FMS(IMS connector by Pratik) Repeatable", doer: "", step: "No delay found.", delay: "" },
    { fmsName: "Fresh To Home (Priyanka)", doer: "", step: "No delay found.", delay: "" },
];

export function FMSBottleneck() {
    const [period, setPeriod] = useState('30');

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">FMS BOTTLE-NECK</h3>
                <div className="flex gap-2">
                    <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2">
                        <option>Select One</option>
                    </select>
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        {['7', '30', '1'].map((p) => (
                            <button
                                key={p}
                                onClick={() => setPeriod(p)}
                                className={`px-2 py-0.5 text-xs font-medium rounded-md transition-all ${period === p
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

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-4 py-3 rounded-l-lg">FMS Name</th>
                            <th scope="col" className="px-4 py-3">Step Doer's Name</th>
                            <th scope="col" className="px-4 py-3">FMS Bottle-Neck Step</th>
                            <th scope="col" className="px-4 py-3 rounded-r-lg">Average Delay Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bottlenecks.map((item, index) => (
                            <tr key={index} className="bg-white border-b border-gray-100 last:border-0 hover:bg-gray-50">
                                <td className="px-4 py-4 font-medium text-gray-900 max-w-[200px] truncate">{item.fmsName}</td>
                                <td className="px-4 py-4">{item.doer || "-"}</td>
                                <td className="px-4 py-4">{item.step}</td>
                                <td className="px-4 py-4">{item.delay || "-"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
