"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";

export function UserFilter() {
    const [isOpen, setIsOpen] = useState(false); // Default hidden as requested

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div
                className="bg-blue-500 px-6 py-4 flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-2 text-white font-medium">
                    {/* Icon can be added here if needed */}
                    <span>FILTER</span>
                </div>
                {isOpen ? <ChevronDown className="text-white" size={20} /> : <ChevronRight className="text-white" size={20} />}
            </div>

            {isOpen && (
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        {/* Keyword */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Keyword:</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            />
                        </div>

                        {/* Username */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Username:</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Phone:</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            />
                        </div>

                        {/* Role */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Role In MIDAP:</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white">
                                <option value="">All</option>
                                <option value="admin">Admin</option>
                                <option value="doer">Doer</option>
                                <option value="auditor">Auditor</option>
                            </select>
                        </div>

                        {/* Branch Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Branch Name</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white">
                                <option value="">All</option>
                                <option value="branch1">Branch 1</option>
                            </select>
                        </div>

                        {/* Department Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Department Name</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white">
                                <option value="">All</option>
                                <option value="dept1">Department 1</option>
                            </select>
                        </div>

                        {/* TL Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">TL Name</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white">
                                <option value="">All</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Status</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white">
                                <option value="">All</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button className="px-6 py-2 bg-[#06B6D4] text-white text-sm font-medium rounded-md hover:bg-[#0891B2] transition-colors uppercase">
                            Filter
                        </button>
                        <button className="px-6 py-2 bg-[#FBBF24] text-white text-sm font-medium rounded-md hover:bg-[#D97706] transition-colors uppercase">
                            Reset Filter
                        </button>
                        <button className="px-6 py-2 bg-[#10B981] text-white text-sm font-medium rounded-md hover:bg-[#059669] transition-colors uppercase">
                            Download CSV
                        </button>
                        <button className="px-6 py-2 bg-[#3B82F6] text-white text-sm font-medium rounded-md hover:bg-[#2563EB] transition-colors uppercase">
                            Privilege Details
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
