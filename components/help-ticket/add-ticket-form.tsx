"use client";

import { Info } from "lucide-react";

export function AddTicketForm() {
    return (
        <div className="glass-panel rounded-2xl p-8">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">CREATE HELP TICKET</h2>
                <a href="#" className="text-blue-500 hover:text-blue-600 text-sm font-medium underline">Review The Guideline video</a>
            </div>

            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                Subject <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                            </label>
                            <input type="text" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all" />
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                Media Upload <Info size={14} className="text-gray-400" />
                            </label>
                            <div className="flex items-center gap-3">
                                <button type="button" className="px-4 py-2 bg-gray-100 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                                    Choose Files
                                </button>
                                <span className="text-sm text-gray-500">No file chosen</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">*File upload maximum limit 2MB</p>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                Priority <Info size={14} className="text-gray-400" />
                            </label>
                            <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500">
                                <option>Select One</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2 pt-4">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span className="text-sm font-medium text-gray-700">Make Attachment Mandatory When Work Done</span>
                            <Info size={14} className="text-gray-400" />
                        </div>

                        <div className="pt-8">
                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:scale-[1.02]">
                                SUBMIT
                            </button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                Select Problem Solver <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                            </label>
                            <input type="text" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all" />
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                Problem <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                            </label>
                            <textarea rows={4} className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-sans"></textarea>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                Planned Date <Info size={14} className="text-gray-400" />
                            </label>
                            <input type="datetime-local" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
