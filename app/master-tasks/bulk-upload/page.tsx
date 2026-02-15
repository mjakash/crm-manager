"use client";

import { PageShell } from "@/components/layout/page-shell";
import { Info, Download, UploadCloud } from "lucide-react";

export default function BulkUploadPage() {
    return (
        <PageShell breadcrumb={["Master Tasks", "Bulk Upload"]}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-8 min-h-[500px]">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">UPLOAD CSV</h2>
                    <a href="#" className="text-blue-500 hover:text-blue-600 text-sm font-medium underline">Review The Guideline video</a>
                </div>

                <div className="max-w-4xl space-y-8">
                    {/* Form Type */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Form Type <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                        </label>
                        <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500">
                            <option>Select One</option>
                        </select>
                    </div>

                    {/* Upload CSV */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Upload CSV <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                        </label>
                        <div className="grid grid-cols-[auto_1fr] gap-4">
                            <button className="px-4 py-2.5 bg-gray-100 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                                Choose File
                            </button>
                            <input
                                type="text"
                                placeholder="No file chosen"
                                className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500"
                                readOnly
                            />
                        </div>
                    </div>

                    {/* Date Format */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            Date Format <span className="text-red-500">*</span> <Info size={14} className="text-gray-400" />
                        </label>
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-500">
                            <option>Select One</option>
                        </select>
                    </div>

                    <div className="pt-8 flex justify-center">
                        <button className="w-full max-w-sm bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                            UPLOAD
                        </button>
                    </div>
                </div>
            </div>
        </PageShell>
    );
}
