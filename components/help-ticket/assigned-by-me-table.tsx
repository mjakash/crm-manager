"use client";

import { ArrowUpDown, Info, ExternalLink } from "lucide-react";

export function AssignedByMeTable() {
    const tickets = [
        {
            id: "HT-1447",
            problemSolver: "Sk aman mondal",
            subject: "hello",
            problem: "hello",
            assignedDate: "02 Feb, 2026 04:04 PM",
            plannedDate: "10 Feb, 2026 04:04 PM",
            resolvedDate: "06 Feb, 2026 05:10 PM",
            delay: "0",
            resolvedBy: "Sk aman mondal",
            resolvedNotes: "uuunihuoitudr",
            status: "Resolved"
        },
        {
            id: "HT-1443",
            problemSolver: "Aditi Chowdhury",
            subject: "Help me to change profile pic",
            problem: "Help me to chan...",
            assignedDate: "02 Feb, 2026 12:20 PM",
            plannedDate: "03 Feb, 2026 12:20 PM",
            resolvedDate: "-",
            delay: "12 day",
            resolvedBy: "-",
            resolvedNotes: "-",
            status: "Open"
        },
        // ... more data
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">HELP TICKETS (ASSIGNED BY ME)</h2>
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
                            <th className="px-4 py-3 font-bold">Problem Solver</th>
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
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Resolved Date <ArrowUpDown size={14} className="text-blue-500" />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">Delay</th>
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Resolved By <ArrowUpDown size={14} className="text-blue-500" />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Resolved Notes <ArrowUpDown size={14} className="text-blue-500" />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">Attachment</th>
                            <th className="px-4 py-3 font-bold">Note</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {tickets.map((ticket) => (
                            <tr key={ticket.id} className="bg-white hover:bg-gray-50 transition-colors group">
                                <td className="px-4 py-4 font-medium text-gray-700">{ticket.id}</td>
                                <td className="px-4 py-4 text-gray-600">{ticket.problemSolver}</td>
                                <td className="px-4 py-4 text-gray-600">{ticket.subject}</td>
                                <td className="px-4 py-4 text-gray-600">
                                    <div className="flex items-center gap-1">
                                        {ticket.problem}
                                        <Info size={14} className="text-gray-400" />
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-gray-600 text-xs w-32">{ticket.assignedDate}</td>
                                <td className="px-4 py-4 text-gray-600 text-xs w-32">{ticket.plannedDate}</td>
                                <td className="px-4 py-4 text-gray-600 text-xs w-32">{ticket.resolvedDate}</td>
                                <td className="px-4 py-4 text-gray-600">{ticket.delay}</td>
                                <td className="px-4 py-4 text-gray-600">{ticket.resolvedBy}</td>
                                <td className="px-4 py-4 text-gray-600">{ticket.resolvedNotes}</td>
                                <td className="px-4 py-4">
                                    {ticket.status === 'Resolved' && <ExternalLink size={16} className="text-blue-500" />}
                                </td>
                                <td className="px-4 py-4">
                                    <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded">NOTE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                <span>Showing 1 to 12 out of 12 records</span>
            </div>
        </div>
    );
}
