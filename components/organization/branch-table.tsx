"use client";

import { Edit, Trash2, ArrowUpDown } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";

export function BranchTable() {
    const branches = [
        { id: 1, name: "Headquarters", company: "Acme Corp", location: "New York", manager: "John Doe", status: "Active" },
        { id: 2, name: "West Coast Hub", company: "Acme Corp", location: "San Francisco", manager: "Jane Smith", status: "Active" },
    ];

    return (
        <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">LIST BRANCHES</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-white border-b border-gray-100">
                        <tr>
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Branch Name <ArrowUpDown size={14} className="text-gray-400" />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">Company</th>
                            <th className="px-4 py-3 font-bold">Location</th>
                            <th className="px-4 py-3 font-bold">Manager</th>
                            <th className="px-4 py-3 font-bold">Status</th>
                            <th className="px-4 py-3 font-bold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {branches.map((branch) => (
                            <tr key={branch.id} className="bg-white hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-4 font-medium text-gray-900">{branch.name}</td>
                                <td className="px-4 py-4 text-gray-600">{branch.company}</td>
                                <td className="px-4 py-4 text-gray-600">{branch.location}</td>
                                <td className="px-4 py-4 text-gray-600">{branch.manager}</td>
                                <td className="px-4 py-4">
                                    <StatusBadge status={branch.status} />
                                </td>
                                <td className="px-4 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                            <Edit size={16} />
                                        </button>
                                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <Trash2 size={16} />
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
