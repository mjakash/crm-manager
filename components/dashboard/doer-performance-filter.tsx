"use client";

import { Calendar, Search } from "lucide-react";

export function DoerPerformanceFilter() {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mb-6">
            <div className="flex flex-col md:flex-row items-end gap-4">
                {/* Doer Name Filter */}
                <div className="flex-1 w-full relative">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                        Doer Name: <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Select One"
                            className="w-full pl-3 pr-10 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                    </div>
                </div>

                {/* From Date */}
                <div className="flex-1 w-full">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                        From Date: <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type="date"
                            className="w-full pl-3 pr-10 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                        <Calendar className="absolute right-3 top-2.5 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                </div>

                {/* To Date */}
                <div className="flex-1 w-full">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                        To Date: <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type="date"
                            className="w-full pl-3 pr-10 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                        <Calendar className="absolute right-3 top-2.5 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                </div>

                {/* Search Button */}
                <div>
                    <button className="px-8 py-2 bg-[#06B6D4] hover:bg-[#0891B2] text-white text-sm font-bold rounded-lg shadow-sm transition-colors uppercase tracking-wide">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
