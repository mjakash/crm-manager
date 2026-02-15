"use client";

import { Info, Paperclip, RefreshCw, RotateCw } from "lucide-react";

const tasks = [
    { code: "CHK1295", title: "AM 16_B", message: "do it ...", assignedBy: "Sk aman mondal", date: "08 Feb, 2026 10:05 AM", status: "Pending", delay: "7 day" },
    { code: "CHK1304", title: "DO it Now", message: "", assignedBy: "tanmay mahato", date: "08 Feb, 2026 12:41 PM", status: "Pending", delay: "7 day" },
    { code: "CHK1310", title: "computer", message: "", icon: Paperclip, assignedBy: "tanmay mahato", date: "08 Feb, 2026 01:38 PM", status: "Pending", delay: "7 day" },
    { code: "CHK1381", title: "AM 16_9", message: "do it ...", assignedBy: "Sk aman mondal", date: "09 Feb, 2026 10:05 AM", status: "Pending", delay: "6 day" },
    { code: "CHK1398", title: "computer", message: "", icon: Paperclip, assignedBy: "tanmay mahato", date: "09 Feb, 2026 01:38 PM", status: "Pending", delay: "6 day" },
    { code: "CHK1370", title: "AM Demo", message: "", assignedBy: "Sk aman mondal", date: "11 Feb, 2026 03:16 PM", status: "Pending", delay: "4 day" },
    { code: "CHK1523", title: "AM 16_11", message: "do it ...", assignedBy: "Sk aman mondal", date: "12 Feb, 2026 10:05 AM", status: "Pending", delay: "3 day" },
    { code: "CHK1510", title: "AM 16_10", message: "do it ...", assignedBy: "Sk aman mondal", date: "12 Feb, 2026 10:05 AM", status: "Pending", delay: "3 day" },
    { code: "CHK1559", title: "DO it Now", message: "", assignedBy: "tanmay mahato", date: "12 Feb, 2026 12:41 PM", status: "Pending", delay: "3 day" },
];

export function TaskListTable() {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">CHECKLIST TASKS</h3>
                <div className="flex gap-2 text-[#06B6D4]">
                    <RefreshCw size={18} className="cursor-pointer hover:rotate-180 transition-transform" />
                    <RotateCw size={18} className="cursor-pointer hover:rotate-180 transition-transform" />
                </div>
            </div>

            <div className="mb-4">
                <button className="px-6 py-2 bg-[#06B6D4] hover:bg-[#0891B2] text-white text-xs font-bold rounded-md shadow-sm transition-colors uppercase tracking-wide">
                    COMPLETE TASKS
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-gray-500">
                    <thead className="text-xs text-gray-900 uppercase bg-white border-b border-gray-100 font-bold">
                        <tr>
                            <th scope="col" className="p-4 w-4">
                                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                            </th>
                            <th scope="col" className="px-4 py-3 cursor-pointer text-[#3B82F6]">Task Code ↑↓</th>
                            <th scope="col" className="px-4 py-3 cursor-pointer text-[#3B82F6]">Task Title ↑↓</th>
                            <th scope="col" className="px-4 py-3">Message</th>
                            <th scope="col" className="px-4 py-3">Assigned By</th>
                            <th scope="col" className="px-4 py-3 cursor-pointer text-[#3B82F6]">Planned Date ↑↓</th>
                            <th scope="col" className="px-4 py-3">Status</th>
                            <th scope="col" className="px-4 py-3">Delay</th>
                            <th scope="col" className="px-4 py-3">Doer Notes</th>
                            <th scope="col" className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index} className={`border-b border-gray-50 hover:bg-gray-50 ${index === 5 ? 'border-l-4 border-l-yellow-400' : index > 5 ? 'border-l-4 border-l-red-500' : 'border-l-4 border-l-red-500'}`}> {/* Visual logic based on screenshot color strips */}
                                <td className="p-4 w-4">
                                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                </td>
                                <td className="px-4 py-4 font-medium text-gray-900">{task.code}</td>
                                <td className="px-4 py-4 font-medium text-gray-900">{task.title}</td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-2">
                                        {task.message}
                                        {task.message && <Info size={14} className="text-gray-400" />}
                                        {task.icon && <task.icon size={14} className="text-[#06B6D4]" />}
                                    </div>
                                </td>
                                <td className="px-4 py-4">{task.assignedBy}</td>
                                <td className="px-4 py-4 whitespace-nowrap">{task.date}</td>
                                <td className="px-4 py-4 text-gray-500">{task.status}</td>
                                <td className="px-4 py-4 text-gray-500">{task.delay}</td>
                                <td className="px-4 py-4">
                                    <button className="px-3 py-1 bg-[#3B82F6] hover:bg-blue-600 text-white text-[10px] font-bold rounded shadow-sm">
                                        NOTE
                                    </button>
                                </td>
                                <td className="px-4 py-4">
                                    <button className="px-3 py-1 bg-[#34D399] hover:bg-emerald-500 text-white text-[10px] font-bold rounded shadow-sm">
                                        COMPLETE
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 text-xs text-gray-500">
                Showing 1 to 20 out of 20 records
            </div>
        </div>
    );
}
