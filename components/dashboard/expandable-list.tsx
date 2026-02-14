"use client";

import { ChevronDown, ChevronRight, Laptop, MoreVertical } from "lucide-react";
import { useState } from "react";

const items = [
    { title: "Pension contributions", content: null },
    {
        title: "Devices",
        content: (
            <div className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm mt-2">
                <div className="bg-gray-900 text-white p-2 rounded-xl">
                    <Laptop size={20} />
                </div>
                <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">MacBook Air</h4>
                    <p className="text-xs text-gray-500">Version M1</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={16} />
                </button>
            </div>
        )
    },
    { title: "Compensation Summary", content: null },
    { title: "Employee Benefits", content: null },
];

export function ExpandableList() {
    const [openIndex, setOpenIndex] = useState<number | null>(1); // Default open "Devices"

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-2">
            {items.map((item, index) => (
                <div key={index} className="bg-white/50 rounded-3xl overflow-hidden transition-all duration-300">
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between p-5 text-left"
                    >
                        <span className="font-medium text-gray-700">{item.title}</span>
                        {openIndex === index ? (
                            <ChevronDown className="text-gray-500 w-5 h-5" />
                        ) : (
                            <ChevronRight className="text-gray-500 w-5 h-5" />
                        )}
                    </button>

                    <div
                        className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100 pb-5 px-5" : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        <div className="overflow-hidden">
                            {item.content || <div className="text-sm text-gray-400 py-2">No details available</div>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
