"use client";

import { Info, ExternalLink, ArrowUpDown } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";

export function HelpTicketTable() {
    const tickets = [
        {
            id: "HT-1452",
            assignedBy: "Sneha Mitra",
            problemSolver: "Sneha Mitra",
            subject: "Desktop isn't working",
            problem: "Desktop isn't w...",
            resolvedNotes: "Done",
            assignedDate: "11 Feb, 2026 12:16 PM",
            plannedDate: "11 Feb, 2026 02:00 PM",
            resolvedDate: "11 Feb, 2026 12:17 PM",
            delay: "0",
            resolvedBy: "Sneha Mitra",
            status: "Resolved"
        },
        {
            id: "HT-1451",
            assignedBy: "Sudarshana Halder",
            problemSolver: "RIMPA",
            subject: "DESKTOP",
            problem: "DESKTOP",
            resolvedNotes: "GYSDGCS",
            assignedDate: "09 Feb, 2026 11:31 AM",
            plannedDate: "-",
            resolvedDate: "09 Feb, 2026 11:32 AM",
            delay: "0",
            resolvedBy: "RIMPA",
            status: "Resolved"
        },
        // ... more data based on screenshot
    ];

    return (
        <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">LIST TICKETS</h2>
                <div className="mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200">
                        SWITCH DOER
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-white border-b border-gray-100">
                        <tr>
                            <th className="p-4 w-4">
                                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            </th>
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
                            <th className="px-4 py-3 font-bold">Resolved Notes</th>
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
                            <th className="px-4 py-3 font-bold">Status</th>
                            <th className="px-4 py-3 font-bold">Resolved By</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {tickets.map((ticket, index) => (
                            <tr key={ticket.id} className="bg-white hover:bg-gray-50 transition-colors group">
                                <td className="p-4">
                                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                </td>
                                <td className="px-4 py-4 font-medium text-gray-700">{ticket.id}</td>
                                <td className="px-4 py-4 text-gray-600">{ticket.assignedBy}</td>
                                <td className="px-4 py-4 text-gray-600">{ticket.problemSolver}</td>
                                <td className="px-4 py-4 text-gray-600">
                                    {ticket.subject}
                                </td>
                                <td className="px-4 py-4 text-gray-600">
                                    <div className="flex items-center gap-1">
                                        {ticket.problem}
                                        <Info size={14} className="text-gray-400" />
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-gray-600">
                                    <div className="flex items-center gap-1">
                                        {ticket.resolvedNotes}
                                        <ExternalLink size={14} className="text-blue-500" />
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-gray-600 text-xs w-32">{ticket.assignedDate}</td>
                                <td className="px-4 py-4 text-gray-600 text-xs w-32">{ticket.plannedDate}</td>
                                <td className="px-4 py-4 text-gray-600 text-xs w-32">{ticket.resolvedDate}</td>
                                <td className="px-4 py-4 text-gray-600">{ticket.delay}</td>
                                <td className="px-4 py-4">
                                    <StatusBadge status={ticket.status} />
                                </td>
                                <td className="px-4 py-4 text-gray-600">{ticket.resolvedBy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                <span>Showing 1 to 20 out of 809 records</span>
                <div className="flex items-center gap-2">
                    <span>Go to Page:</span>
                    <select className="border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-blue-500">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
