"use client";

import { Pencil, Trash2 } from "lucide-react";

export function MyLeaveHistory() {
    const history = [
        { id: 1, startDate: "23 Jan, 2026", endDate: "23 Jan, 2026", reason: "abcdefghijklmnopqrstuvwxyz", status: "Rejected" },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-white border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-bold text-blue-900">#</th>
                            <th className="px-6 py-4 font-bold text-gray-800">Leave Start Date</th>
                            <th className="px-6 py-4 font-bold text-gray-800">Leave End Date</th>
                            <th className="px-6 py-4 font-bold text-gray-800">Leave Reason</th>
                            <th className="px-6 py-4 font-bold text-gray-800">Status</th>
                            <th className="px-6 py-4 font-bold text-gray-800 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {history.map((item) => (
                            <tr key={item.id} className="bg-white hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-blue-500 font-medium">{item.id}</td>
                                <td className="px-6 py-4 text-gray-600">{item.startDate}</td>
                                <td className="px-6 py-4 text-gray-600">{item.endDate}</td>
                                <td className="px-6 py-4 text-gray-600">{item.reason}</td>
                                <td className="px-6 py-4 text-gray-600">{item.status}</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex items-center justify-center gap-3">
                                        <button className="text-blue-400 hover:text-blue-600 transition-colors">
                                            <Pencil size={18} />
                                        </button>
                                        <button className="text-blue-400 hover:text-blue-600 transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
