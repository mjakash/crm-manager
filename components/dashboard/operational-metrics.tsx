"use client";

import { MessageCircle } from "lucide-react";

export function OperationalMetrics() {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <MessageCircle size={24} />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">Marketing</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Operational</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Message Limit</p>
                    <p className="text-xl font-bold text-gray-900">20000</p>
                </div>
                <div className="text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Message In Queue</p>
                    <p className="text-xl font-bold text-gray-900">6</p>
                </div>
                <div className="text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Message Remaining</p>
                    <p className="text-xl font-bold text-gray-900">16501</p>
                </div>
            </div>
        </div>
    );
}
