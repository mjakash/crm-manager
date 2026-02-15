"use client";

import { Eye, Pencil, Trash2, ArrowUpDown, Info } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";

export function ChecklistTable() {
    const tasks = [
        { id: 1, name: "pct222", code: "MSTCHK473", message: "", assignBy: "Prantika", assignTo: "Prantika", frequency: "1 day", plannedDate: "16 Feb, 2026 12:33 PM", beforeDays: 0, reminder: false, status: "Pending" },
        { id: 2, name: "audit_test_ck_uuuu", code: "MSTCHK462", message: "", assignBy: "anushka", assignTo: "anushka", frequency: "1 week", plannedDate: "17 Feb, 2026 10:56 AM", beforeDays: 0, reminder: false, status: "Completed" },
        { id: 3, name: "audit_test_ck_33", code: "MSTCHK456", message: "", assignBy: "Prantika", assignTo: "anushka", frequency: "1 week", plannedDate: "16 Feb, 2026 06:45 PM", beforeDays: 0, reminder: false, status: "In Progress" },
        { id: 4, name: "audit_test_ck_22", code: "MSTCHK455", message: "jjimgujuyj 65u8799", assignBy: "Prantika", assignTo: "Prantika_doer", frequency: "1 day", plannedDate: "16 Feb, 2026 06:50 PM", beforeDays: 0, reminder: true, status: "Pending" },
        { id: 5, name: "audit_test_ck_22", code: "MSTCHK454", message: "jjimgujuyj 65u8799", assignBy: "Prantika", assignTo: "anushka", frequency: "1 day", plannedDate: "16 Feb, 2026 06:50 PM", beforeDays: 0, reminder: true, status: "Pending" },
        { id: 6, name: "audit_test_ck_22", code: "MSTCHK453", message: "jjimgujuyj 65u8799", assignBy: "Prantika", assignTo: "12s", frequency: "1 day", plannedDate: "16 Feb, 2026 06:50 PM", beforeDays: 0, reminder: true, status: "Pending" },
    ];

    return (
        <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">LIST CHECKLISTS</h2>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors shadow-sm shadow-red-200">
                    DELETE
                </button>
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
                                    Task Name <ArrowUpDown size={14} />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Master Task Code <ArrowUpDown size={14} />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">Message</th>
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Assign By <ArrowUpDown size={14} />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Assign To <ArrowUpDown size={14} />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">Frequency</th>
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Planned Date <ArrowUpDown size={14} />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">Before Days</th>
                            <th className="px-4 py-3 font-bold">Status</th>
                            <th className="px-4 py-3 font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {tasks.map((task) => (
                            <tr key={task.id} className="bg-white hover:bg-gray-50 transition-colors group">
                                <td className="p-4">
                                    <div className="flex items-center">
                                        {/* Removed the raw colored dot */}
                                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    </div>
                                </td>
                                <td className="px-4 py-4 font-medium text-gray-900">{task.name}</td>
                                <td className="px-4 py-4 text-gray-500">{task.code}</td>
                                <td className="px-4 py-4">
                                    {task.message && (
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-gray-500 truncate max-w-[100px]">{task.message}</span>
                                            {task.reminder && <Info size={16} className="text-gray-400" />}
                                        </div>
                                    )}
                                </td>
                                <td className="px-4 py-4 font-medium text-gray-700">{task.assignBy}</td>
                                <td className="px-4 py-4 font-medium text-gray-700">{task.assignTo}</td>
                                <td className="px-4 py-4 text-gray-500">{task.frequency}</td>
                                <td className="px-4 py-4 text-gray-500 max-w-[120px]">{task.plannedDate}</td>
                                <td className="px-4 py-4 text-gray-500 text-center">{task.beforeDays}</td>
                                <td className="px-4 py-4">
                                    <StatusBadge status={task.status} />
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200">
                                            <Eye size={16} />
                                        </button>
                                        <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200">
                                            <Pencil size={16} />
                                        </button>
                                        <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                <span>Showing 1 to 20 out of 278 records</span>
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
