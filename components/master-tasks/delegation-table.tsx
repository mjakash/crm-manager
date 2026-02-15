"use client";

import { Eye, Pencil, Trash2, ArrowUpDown, Info, Calendar, FileText } from "lucide-react";

export function DelegationTable() {
    const tasks = [
        { id: 1, name: "iiiiiiiiii", code: "MSTDEL474", message: "", assignBy: "Prantika", assignTo: "anushka", plannedDate: "12 Feb, 2026 01:20 PM", reminder: true },
        { id: 2, name: "Demo1", code: "MSTDEL472", message: "", assignBy: "Sneha Mitra", assignTo: "Sneha Mitra", plannedDate: "15 Feb, 2026 12:48 PM", reminder: true },
        { id: 3, name: "test_by_rudra_audit3", code: "MSTDEL471", message: "", assignBy: "Rudra Maity", assignTo: "Rudra d'ema", plannedDate: "11 Feb, 2026 10:35 AM", reminder: true },
        { id: 4, name: "my_task_d1", code: "MSTDEL470", message: "", assignBy: "Prantika", assignTo: "anushka", plannedDate: "10 Feb, 2026 07:00 PM", reminder: true },
        { id: 5, name: "45545", code: "MSTDEL469", message: "", assignBy: "Rudra Maity", assignTo: "16/01", plannedDate: "21 Feb, 2026 07:50 AM", reminder: true },
        { id: 6, name: "d111111", code: "MSTDEL468", message: "", assignBy: "Prantika", assignTo: "anushka", plannedDate: "10 Feb, 2026 01:23 PM", reminder: true },
        { id: 7, name: "delegation1", code: "MSTDEL467", message: "", assignBy: "Prantika", assignTo: "Prantika_doer", plannedDate: "10 Feb, 2026 03:40 PM", reminder: true },
        { id: 8, name: "delegation1", code: "MSTDEL466", message: "", assignBy: "Prantika", assignTo: "anushka", plannedDate: "10 Feb, 2026 03:40 PM", reminder: true },
        { id: 9, name: "dgththt", code: "MSTDEL465", message: "", assignBy: "", assignTo: "Prantika_doer", plannedDate: "10 Feb, 2026 01:07 PM", reminder: true },

    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">LIST DELEGATIONS</h2>
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
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Planned Date <ArrowUpDown size={14} />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">Reminder</th>
                            <th className="px-4 py-3 font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {tasks.map((task) => (
                            <tr key={task.id} className="bg-white hover:bg-gray-50 transition-colors group">
                                <td className="p-4">
                                    <div className="flex items-center">
                                        <div className={`w-1 h-8 mr-3 rounded-full ${task.id % 3 === 0 ? 'bg-yellow-400' : task.id % 3 === 1 ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    </div>
                                </td>
                                <td className="px-4 py-4 font-medium text-gray-900">{task.name}</td>
                                <td className="px-4 py-4 text-gray-500">{task.code}</td>
                                <td className="px-4 py-4">
                                    {task.message || "-"}
                                </td>
                                <td className="px-4 py-4 font-medium text-gray-700">{task.assignBy}</td>
                                <td className="px-4 py-4 font-medium text-gray-700">{task.assignTo}</td>
                                <td className="px-4 py-4 text-gray-500">{task.plannedDate}</td>
                                <td className="px-4 py-4 text-center">
                                    <div className="flex items-center gap-2 justify-center">
                                        <FileText size={18} className="text-blue-400" />
                                        <Calendar size={18} className="text-blue-400" />
                                        <Info size={18} className="text-blue-400" />
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200">
                                            <Pencil size={16} />
                                        </button>
                                        <div className="flex flex-col gap-1">
                                            <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200">
                                                <Calendar size={16} />
                                            </button>
                                            <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200">
                                                <Calendar size={16} />
                                            </button>
                                        </div>
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
                <span>Showing 1 to 20 out of 130 records</span>
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
