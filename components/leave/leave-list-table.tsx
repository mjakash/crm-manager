"use client";

import { Pencil, Trash2, ArrowUpRight } from "lucide-react";

export function LeaveListTable() {
    const leaves = [
        {
            id: 1,
            doer: "demo_r'udra",
            startDate: "05 Feb, 2026",
            endDate: "05 Feb, 2026",
            requestDate: "04 Feb, 2026 17:16:28",
            type: "Casual Leave(CL)",
            reason: "sddsd",
            status: "Pending",
            approvedBy: "-",
            approvedDate: "-",
            approvedByName: "-"
        },
        {
            id: 2,
            doer: "shamik_admin",
            startDate: "02 Feb, 2026",
            endDate: "02 Feb, 2026",
            requestDate: "02 Feb, 2026 16:05:04",
            type: "Half-Day (Second Half)",
            reason: "85.46",
            status: "Pending",
            approvedBy: "-",
            approvedDate: "-",
            approvedByName: "-"
        },
        {
            id: 3,
            doer: "anushka",
            startDate: "02 Feb, 2026",
            endDate: "02 Feb, 2026",
            requestDate: "02 Feb, 2026 16:01:20",
            type: "Half-Day (First Half)",
            reason: "\\\\=)- pi {{} ||} |tulioL.l",
            status: "Approved",
            approvedBy: "02 Feb, 2026 15:01:33",
            approvedDate: "02 Feb, 2026 15:01:33",
            approvedByName: "anushka"
        },
        {
            id: 4,
            doer: "Developer",
            startDate: "31 Jan, 2026",
            endDate: "31 Jan, 2026",
            requestDate: "30 Jan, 2026 16:53:36",
            type: "Casual Leave(CL)",
            reason: "??? ??????? ?? ????, ???? ???? ???? ?? ????? ????? ????? ?? ????? ???? ????.",
            status: "Pending",
            approvedBy: "-",
            approvedDate: "-",
            approvedByName: "-"
        },
        {
            id: 5,
            doer: "Prantika",
            startDate: "30 Jan, 2026",
            endDate: "04 Feb, 2026",
            requestDate: "30 Jan, 2026 12:53:59",
            type: "Sick Leave(SL)",
            reason: "9",
            status: "Approved",
            approvedBy: "30 Jan, 2026 12:54:20",
            approvedDate: "30 Jan, 2026 12:54:20",
            approvedByName: "Prantika"
        },
        {
            id: 6,
            doer: "Prantika_tl",
            startDate: "29 Jan, 2026",
            endDate: "29 Jan, 2026",
            requestDate: "29 Jan, 2026 18:22:40",
            type: "Casual Leave(CL)",
            reason: "rtertret",
            status: "Approved",
            approvedBy: "29 Jan, 2026 18:22:49",
            approvedDate: "29 Jan, 2026 18:22:49",
            approvedByName: "Prantika_tl"
        }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">LEAVE LIST</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <tbody className="divide-y divide-gray-50">
                        {leaves.map((leave) => (
                            <tr key={leave.id} className="bg-white hover:bg-gray-50 transition-colors group">
                                <td className="p-4 w-48">
                                    <div className="font-medium text-gray-900 mb-1">{leave.doer}</div>
                                </td>
                                <td className="p-4 w-64">
                                    <div className="flex gap-4 text-xs text-gray-500">
                                        <div>
                                            <div className="font-medium text-gray-900">{leave.startDate}</div>
                                            <div>Start Date</div>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">{leave.endDate}</div>
                                            <div>End Date</div>
                                        </div>
                                    </div>
                                    <div className="mt-2 text-xs text-gray-400">
                                        Requested: {leave.requestDate}
                                    </div>
                                </td>
                                <td className="p-4 w-48">
                                    <div className="text-gray-700 font-medium">{leave.type}</div>
                                </td>
                                <td className="p-4">
                                    <div className="text-gray-600 truncate max-w-xs" title={leave.reason}>{leave.reason}</div>
                                </td>
                                <td className="p-4 w-32">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${leave.status === 'Approved' ? 'bg-green-100 text-green-700' :
                                            leave.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {leave.status}
                                    </span>
                                    {leave.status === 'Approved' && (
                                        <div className="mt-2 text-[10px] text-gray-400">
                                            By {leave.approvedByName} <br />
                                            {leave.approvedDate}
                                        </div>
                                    )}
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200">
                                            <ArrowUpRight size={16} />
                                        </button>
                                        <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200">
                                            <Pencil size={16} />
                                        </button>
                                        <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200">
                                            <Trash2 size={16} />
                                        </button>
                                        {leave.status === 'Pending' && (
                                            <button className="px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded hover:bg-green-600 transition-colors shadow-sm shadow-green-200 ml-2">
                                                APPROVE
                                            </button>
                                        )}
                                        {leave.status === 'Pending' && (
                                            <button className="w-6 h-8 bg-red-400 rounded-r-md ml-[-4px]"></button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                <span>Showing 1 to 20 out of 220 records</span>
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
