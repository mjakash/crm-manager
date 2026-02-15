"use client";

import { useState } from "react";

const filters = [
    "Checklist Tasks",
    "Delegation Tasks",
    "FMS Tasks",
    "Pipe Line Tasks",
    "Help Ticket Tasks",
    "PMS Tasks",
    "Tasks Assigned By skaman"
];

const subFilters = [
    "Completed Checklist Task",
    "Completed Delegation Task",
    "Completed Fms Task",
    "Doer Task"
];

export function TaskFilters() {
    const [activeFilter, setActiveFilter] = useState("Checklist Tasks");

    return (
        <div className="space-y-4 mb-6">
            {/* Main Filters */}
            <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${activeFilter === filter
                                ? 'bg-[#F43F5E] text-white shadow-md' // Rose 500
                                : 'bg-[#93C5FD] text-gray-900 hover:bg-blue-300' // Blue 300
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Sub Filters & Toggles */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                    {subFilters.map((filter) => (
                        <button
                            key={filter}
                            className="px-4 py-2 bg-[#93C5FD] text-gray-900 rounded-lg text-xs font-medium hover:bg-blue-300 transition-colors"
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    {/* All / Today Only Toggle */}
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-500">All</span>
                        <div className={`w-10 h-5 bg-gray-300 rounded-full relative cursor-pointer`}>
                            <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm`}></div>
                        </div>
                        <span className="text-xs font-medium text-gray-500">Today Only</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
