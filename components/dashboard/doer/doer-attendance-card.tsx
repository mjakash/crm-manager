"use client";

import { Eye } from "lucide-react";

export function DoerAttendanceCard() {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col relative">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-900">
                    Attendance (February)
                    <br />
                    (WD : 19)
                </h3>
                <button className="bg-[#06B6D4] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 uppercase tracking-wider hover:bg-[#0891B2] transition-colors">
                    View Log
                    {/* <Eye size={12} /> */}
                </button>
            </div>

            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-[10px]">
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Attendance Mark</span>
                    <span className="text-gray-900 font-bold">7</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Avg. Working Hours</span>
                    <span className="text-gray-900 font-bold">45:33h</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Delay Check-In</span>
                    <span className="text-gray-900 font-bold">2</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Early Check-Out</span>
                    <span className="text-gray-900 font-bold">0</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Leave Taken</span>
                    <span className="text-gray-900 font-bold">0</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Absent</span>
                    <span className="text-gray-900 font-bold">0</span>
                </div>
            </div>
        </div>
    );
}
