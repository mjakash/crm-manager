"use client";

import { Info } from "lucide-react";

export function LeaveApplyForm() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">LEAVE APPLY</h2>
                <a href="#" className="text-blue-500 hover:text-blue-600 text-sm font-medium underline">Review The Guideline video</a>
            </div>

            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* From Date */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            From: <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                        </label>
                        <input type="date" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500" />
                    </div>

                    {/* To Date */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            To: <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                        </label>
                        <input type="date" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500" />
                    </div>

                    {/* Leave Type */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Leave Type <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                        </label>
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500">
                            <option>Select One</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Leave Reason */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Leave Reason: <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                        </label>
                        <textarea rows={2} className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-sans"></textarea>
                    </div>

                    {/* Attachment */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Attachment <Info size={14} className="text-gray-400" />
                        </label>
                        <div className="flex items-center gap-3">
                            <button type="button" className="px-4 py-2.5 bg-gray-100 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                                Choose File
                            </button>
                            <span className="text-sm text-gray-500">No file chosen</span>
                        </div>
                        <p className="text-xs text-red-500 mt-1">*File upload maximum limit 2 MB</p>
                    </div>
                </div>

                <div className="flex justify-center pt-4">
                    <button className="w-full max-w-sm bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:scale-[1.02]">
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    );
}
