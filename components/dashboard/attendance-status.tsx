"use client";

import { User } from "lucide-react";

const attendees = [
    { name: "demo_r'udra", status: "Present", avatar: null },
    { name: "dj", status: "Present", avatar: null },
    { name: "Kiran Karmakar", status: "Present", avatar: null },
    { name: "Rudra Maity", status: "Present", avatar: null },
    { name: "Sk aman mondal", status: "Present", avatar: null },
];

export function AttendanceStatus() {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">ATTENDANCE STATUS</h3>
                <input type="date" className="bg-gray-50 border border-gray-200 text-gray-900 text-xs rounded-lg focus:ring-primary focus:border-primary block p-2" defaultValue="2026-02-14" />
            </div>

            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 whitespace-nowrap">Total <span className="ml-1 bg-white px-1.5 py-0.5 rounded-full text-[10px]">290</span></span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 whitespace-nowrap">Present <span className="ml-1 bg-white px-1.5 py-0.5 rounded-full text-[10px]">5</span></span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 whitespace-nowrap">Absent <span className="ml-1 bg-white px-1.5 py-0.5 rounded-full text-[10px]">284</span></span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 whitespace-nowrap">Leave <span className="ml-1 bg-white px-1.5 py-0.5 rounded-full text-[10px]">1</span></span>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-4 max-h-[300px] custom-scrollbar">
                {attendees.map((person, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 border border-blue-100">
                            <User size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900">{person.name} ({person.status})</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
