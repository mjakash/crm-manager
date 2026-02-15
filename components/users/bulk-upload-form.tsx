"use client";

import { Info, UploadCloud } from "lucide-react";

export function BulkUploadForm() {
    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-8 min-h-[400px]">
            <h2 className="text-lg font-bold text-gray-700 uppercase tracking-tight">UPLOAD CSV</h2>

            <div className="space-y-6">

                {/* Download Sample */}
                <div className="flex items-center gap-2">
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
                        Download Sample User Upload CSV file
                        <Info size={16} className="text-gray-400" />
                    </a>
                </div>

                {/* Upload Input */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        Upload CSV <span className="text-red-500">*</span>
                        <Info size={14} className="text-gray-400" />
                    </label>
                    <div className="flex items-center w-full">
                        <label
                            htmlFor="file-upload"
                            className="flex-shrink-0 px-4 py-2 bg-gray-100 border border-gray-300 border-r-0 rounded-l-md text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors"
                        >
                            Choose File
                        </label>
                        <div className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md text-sm text-gray-400 bg-white truncate">
                            No file chosen
                        </div>
                        <input id="file-upload" type="file" className="hidden" accept=".csv" />
                    </div>
                </div>

                {/* Upload Button */}
                <div className="pt-4 flex justify-center">
                    <button className="px-12 py-3 bg-[#3B82F6] text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-md uppercase tracking-wide flex items-center gap-2">
                        UPLOAD
                    </button>
                </div>

            </div>
        </div>
    );
}
