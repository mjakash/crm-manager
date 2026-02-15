"use client";

import { useState } from "react";
import { Filter, RotateCcw, Download, ChevronDown, ChevronUp } from "lucide-react";

export function HelpTicketFilter() {
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
                        {/* Keyword */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Keyword</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                            />
                        </div>

                        {/* Assigned By */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Assigned By</label>
                            <div className="relative">
                                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none text-gray-500">
                                    <option>All</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* From Date */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">From Date</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500"
                                />
                            </div>
                        </div>

                        {/* To Date */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">To Date</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500"
                                />
                            </div>
                        </div>

                        {/* Problem Solver */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Problem Solver</label>
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

                        {/* Status */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Status</label>
                            <div className="relative">
                                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none text-gray-500">
                                    <option>All</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0EA5E9] text-white rounded-xl font-medium hover:bg-[#0284C7] transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-sm shadow-blue-200">
                            <Filter size={18} />
                            FILTER
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#EAB308] text-white rounded-xl font-medium hover:bg-[#CA8A04] transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-sm shadow-yellow-200">
                            <RotateCcw size={18} />
                            RESET FILTER
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#2DD4BF] text-white rounded-xl font-medium hover:bg-[#14B8A6] transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-sm shadow-teal-200">
                            <Download size={18} />
                            DOWNLOAD CSV
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
