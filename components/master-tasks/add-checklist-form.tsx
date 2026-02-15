"use client";

import { useState } from "react";
import { Calendar, Clock, Info, Upload, Mic, Play, MoreVertical } from "lucide-react";

export function AddChecklistForm() {
    const [setReminder, setSetReminder] = useState(false);
    const [autoClose, setAutoClose] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 uppercase">ADD CHECKLIST</h2>
                <a href="#" className="text-blue-500 hover:text-blue-600 text-sm font-medium underline">Review The Guideline video</a>
            </div>

            <form className="space-y-8">
                {/* Section 1: Basic Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Assign By <Info size={14} className="text-gray-400" />
                        </label>
                        <div className="px-4 py-2.5 bg-blue-50 border border-blue-100 rounded-xl text-sm font-medium text-blue-700 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Sk aman mondal
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Task Name <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                        </label>
                        <input type="text" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-sans" />
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Assign to <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                        </label>
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500">
                            <option>Select One</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Planned Date <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                        </label>
                        <input type="datetime-local" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500" />
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Priority <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                        </label>
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Effort time (H:MM) <Info size={14} className="text-gray-400" />
                        </label>
                        <input type="text" placeholder="H:MM (e.g. 1:20)" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all" />
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Assign PC <Info size={14} className="text-gray-400" />
                        </label>
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500">
                            <option>Select One</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Group Name <Info size={14} className="text-gray-400" />
                        </label>
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500">
                            <option>Select One</option>
                        </select>
                    </div>
                </div>

                <div className="text-xs text-red-500 font-medium italic text-right mt-[-10px]">Use microphone for recording.</div>

                <div className="grid grid-cols-12 gap-6 items-center">
                    <div className="col-span-12 md:col-span-4 space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Select Notify Doer (When task done) <Info size={14} className="text-gray-400" />
                        </label>
                        <input type="text" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all" />
                    </div>
                    <div className="col-span-12 md:col-span-8 flex flex-col md:flex-row gap-6 md:items-end md:justify-end">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span className="text-sm font-medium text-gray-700 flex items-center gap-1">Make Attachment Mandatory When Work Done <Info size={14} className="text-gray-400" /></span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span className="text-sm font-medium text-gray-700 flex items-center gap-1">Make Note Mandatory When Work Done <Info size={14} className="text-gray-400" /></span>
                        </label>
                        <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                            <button type="button" className="p-1 text-gray-400 hover:text-blue-500"><Play size={16} fill="currentColor" /></button>
                            <div className="flex-1 h-1 bg-gray-200 rounded-full w-24"></div>
                            <span className="text-xs text-gray-500">0:00 / 0:00</span>
                            <button type="button" className="p-1 text-gray-400"><MoreVertical size={16} /></button>
                            <button type="button" className="w-8 h-8 flex items-center justify-center rounded-full bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 transition-colors ml-2"><Mic size={16} /></button>
                        </div>
                    </div>
                </div>

                {/* Section 2: Frequency & Mode */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Mode <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                        </label>
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500">
                            <option>Select One</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Frequency <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                        </label>
                        <input type="text" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-sans" />
                    </div>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Create Before Days <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                        </label>
                        <input type="text" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-sans" />
                    </div>
                </div>

                <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm font-medium text-gray-700 flex items-center gap-1">Skip Checklist On Holidays <Info size={14} className="text-gray-400" /></span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm font-medium text-gray-700 flex items-center gap-1">Is it a compliance task? <Info size={14} className="text-gray-400" /></span>
                    </label>
                </div>

                {/* Section 3: Communication */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Message <Info size={14} className="text-gray-400" />
                        </label>
                        <textarea rows={3} className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-sans"></textarea>
                    </div>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Notify To (If Task Not Done) <Info size={14} className="text-gray-400" />
                        </label>
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500">
                            <option>Select One</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Auditor <Info size={14} className="text-gray-400" />
                        </label>
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500">
                            <option>Select One</option>
                        </select>
                    </div>
                </div>

                {/* Media Upload */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        Media Upload <Info size={14} className="text-gray-400" />
                    </label>
                    <div className="flex items-center gap-3">
                        <button type="button" className="px-4 py-2 bg-gray-100 items-center gap-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">Choose File</button>
                        <span className="text-sm text-gray-500">No file chosen</span>
                    </div>
                    <p className="text-xs text-gray-500">*File upload maximum limit 2MB</p>
                </div>

                <hr className="border-gray-50" />

                {/* Reminder Section */}
                <div className="space-y-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={setReminder}
                            onChange={(e) => setSetReminder(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700 flex items-center gap-1">Set Reminder <Info size={14} className="text-gray-400" /></span>
                    </label>

                    {setReminder && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    Reminder Mode <Info size={14} className="text-gray-400" />
                                </label>
                                <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500">
                                    <option>Select</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    Reminder Frequency <Info size={14} className="text-gray-400" />
                                </label>
                                <input type="text" className="w-full px-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl" disabled />
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    Reminder Before Days <Info size={14} className="text-gray-400" />
                                </label>
                                <input type="text" className="w-full px-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl" disabled />
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    Reminder Starting Time <Info size={14} className="text-gray-400" />
                                </label>
                                <input type="text" placeholder="--:--" className="w-full px-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl" disabled />
                            </div>
                        </div>
                    )}
                </div>

                {/* Auto Close */}
                <div className="space-y-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={autoClose}
                            onChange={(e) => setAutoClose(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700 flex items-center gap-1">Checklist Auto Close <Info size={14} className="text-gray-400" /></span>
                    </label>

                    {autoClose && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    Checklist Auto Close Days <Info size={14} className="text-gray-400" />
                                </label>
                                <input type="text" className="w-full px-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl" disabled />
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex justify-center pt-8">
                    <button type="submit" className="w-full max-w-sm bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:scale-[1.02]">
                        SUBMIT
                    </button>
                </div>

            </form>
        </div>
    );
}
