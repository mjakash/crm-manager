"use client";

import { ArrowUpDown } from "lucide-react";

export function AssignedToMeTable() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">HELP TICKETS (ASSIGNED TO ME)</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-white border-b border-gray-100">
                        <tr>
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Ticket ID <ArrowUpDown size={14} className="text-red-500" />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Assigned By <ArrowUpDown size={14} className="text-blue-500" />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Subject <ArrowUpDown size={14} className="text-blue-500" />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Problem <ArrowUpDown size={14} className="text-blue-500" />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Assigned Date <ArrowUpDown size={14} className="text-blue-500" />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Planned Date <ArrowUpDown size={14} className="text-blue-500" />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">Delay</th>
                            <th className="px-4 py-3 font-bold">Priority</th>
                            <th className="px-4 py-3 font-bold">Status</th>
                            <th className="px-4 py-3 font-bold">Attachment</th>
                            <th className="px-4 py-3 font-bold">Action/Resolved Note</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        <tr>
                            <td colSpan={11} className="px-4 py-8 text-center text-gray-500">
                                No record found.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
