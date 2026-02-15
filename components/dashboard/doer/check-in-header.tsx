"use client";

import { LogIn } from "lucide-react";
import { useState } from "react";

export function CheckInHeader() {
    const [isCheckedIn, setIsCheckedIn] = useState(true); // Default to checked in per screenshot

    return (
        <div className="flex items-center justify-between mb-6">
            <button
                onClick={() => setIsCheckedIn(!isCheckedIn)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 ${isCheckedIn ? 'bg-[#34D399]' : 'bg-gray-400'}`} // Emerald 400
            >
                {isCheckedIn ? 'CHECK IN' : 'CHECK OUT'}
                <LogIn className="w-5 h-5 rotate-180" /> {/* Simulate "Check In" icon */}
            </button>

            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500">Statistics Dashboard</span>
                {/* Toggle handled in parent but visually here */}

            </div>
        </div>
    );
}
