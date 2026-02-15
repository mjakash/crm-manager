"use client";

import { useState } from "react";
import { Search, Filter, RotateCcw, Download, ChevronDown, ChevronUp, Calendar } from "lucide-react";

export function ChecklistFilter() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div
                className="bg-blue-500 px-6 py-4 flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-2 text-white font-medium">
                    <Filter size={20} />
                    <span>FILTER</span>
                </div>
                {isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
            </div>

            {isOpen && (
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Keyword */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Keyword</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                            />
                        </div>

                        {/* Assign To */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Assign To</label>
                            <div className="relative">
                                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none text-gray-500">
                                    <option>All</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Priority */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Priority</label>
                            <div className="relative">
                                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none text-gray-500">
                                    <option>All</option>
                                    <option>High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Mode */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Mode</label>
                            <div className="relative">
                                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none text-gray-500">
                                    <option>All</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Start Date */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Start Date</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500"
                                />
                            </div>
                        </div>

                        {/* End Date */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">End Date</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500"
                                />
                            </div>
                        </div>

                        {/* Auditor */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Auditor</label>
                            <div className="relative">
                                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none text-gray-500">
                                    <option>All</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Assign PC */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Assign PC</label>
                            <div className="relative">
                                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none text-gray-500">
                                    <option>All</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Assign By */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Assign By</label>
                            <div className="relative">
                                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none text-gray-500">
                                    <option>All</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Department Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Department Name</label>
                            <div className="relative">
                                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none text-gray-500">
                                    <option>All</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Group Name */}
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-medium text-gray-700">Group Name</label>
                            <div className="relative">
                                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none text-gray-500">
                                    <option>All</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0EA5E9] text-white rounded-xl font-medium hover:bg-[#0284C7] transition-colors shadow-sm shadow-blue-200">
                            <Filter size={18} />
                            FILTER
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#EAB308] text-white rounded-xl font-medium hover:bg-[#CA8A04] transition-colors shadow-sm shadow-yellow-200">
                            <RotateCcw size={18} />
                            RESET FILTER
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#2DD4BF] text-white rounded-xl font-medium hover:bg-[#14B8A6] transition-colors shadow-sm shadow-teal-200">
                            <Download size={18} />
                            DOWNLOAD CSV
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
