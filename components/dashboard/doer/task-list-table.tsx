"use client";

import { Info, Paperclip, RefreshCw, RotateCw, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
    const [activeMessage, setActiveMessage] = useState<{ title: string, content: string } | null>(null);

    const toggleAll = () => {
        if (selectedTasks.length === tasks.length) {
            setSelectedTasks([]);
        } else {
            setSelectedTasks(tasks.map(t => t.code));
        }
    };

    const toggleTask = (code: string) => {
        if (selectedTasks.includes(code)) {
            setSelectedTasks(selectedTasks.filter(c => c !== code));
        } else {
            setSelectedTasks([...selectedTasks, code]);
        }
    };

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative">
            <AnimatePresence>
                {activeMessage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
                        onClick={() => setActiveMessage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl p-6 shadow-xl max-w-sm w-full relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveMessage(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">{activeMessage.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {activeMessage.content || "No detailed message available."}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">CHECKLIST TASKS</h3>
                <div className="flex gap-2 text-[#06B6D4]">
                    <RefreshCw size={18} className="cursor-pointer hover:rotate-180 transition-transform" />
                    <RotateCw size={18} className="cursor-pointer hover:rotate-180 transition-transform" />
                </div>
            </div>

            <div className="mb-4">
                <button className="px-6 py-2 bg-[#06B6D4] hover:bg-[#0891B2] text-white text-xs font-bold rounded-md shadow-sm transition-colors uppercase tracking-wide cursor-pointer">
                    COMPLETE TASKS
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-gray-500">
                    <thead className="text-xs text-gray-900 uppercase bg-white border-b border-gray-100 font-bold">
                        <tr>
                            <th scope="col" className="p-4 w-4">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                                    checked={selectedTasks.length === tasks.length && tasks.length > 0}
                                    onChange={toggleAll}
                                />
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
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                                        checked={selectedTasks.includes(task.code)}
                                        onChange={() => toggleTask(task.code)}
                                    />
                                </td>
                                <td className="px-4 py-4 font-medium text-gray-900">{task.code}</td>
                                <td className="px-4 py-4 font-medium text-gray-900">{task.title}</td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-2">
                                        <span className="truncate max-w-[100px]">{task.message}</span>
                                        {task.message && (
                                            <Info
                                                size={14}
                                                className="text-gray-400 hover:text-[#06B6D4] cursor-pointer transition-colors"
                                                onClick={() => setActiveMessage({ title: task.title, content: task.message })}
                                            />
                                        )}
                                        {task.icon && <task.icon size={14} className="text-[#06B6D4]" />}
                                    </div>
                                </td>
                                <td className="px-4 py-4">{task.assignedBy}</td>
                                <td className="px-4 py-4 whitespace-nowrap">{task.date}</td>
                                <td className="px-4 py-4 text-gray-500">{task.status}</td>
                                <td className="px-4 py-4 text-gray-500">{task.delay}</td>
                                <td className="px-4 py-4">
                                    <button className="px-3 py-1 bg-[#3B82F6] hover:bg-blue-600 text-white text-[10px] font-bold rounded shadow-sm cursor-pointer">
                                        NOTE
                                    </button>
                                </td>
                                <td className="px-4 py-4">
                                    <button className="px-3 py-1 bg-[#34D399] hover:bg-emerald-500 text-white text-[10px] font-bold rounded shadow-sm cursor-pointer">
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
