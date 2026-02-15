"use client";

import { Info } from "lucide-react";

export function AddUserForm() {
    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-8">
            <h2 className="text-lg font-bold text-gray-700 uppercase tracking-tight">ADD USER</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Name */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        Name <span className="text-red-500">*</span>
                        <Info size={14} className="text-gray-400" />
                    </label>
                    <input
                        type="text"
                        placeholder=""
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        Last Name <span className="text-red-500">*</span>
                        <Info size={14} className="text-gray-400" />
                    </label>
                    <input
                        type="text"
                        placeholder=""
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        Email <span className="text-red-500">*</span>
                        <Info size={14} className="text-gray-400" />
                    </label>
                    <input
                        type="email"
                        placeholder=""
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        Phone <span className="text-red-500">*</span> (10 digit only)
                        <Info size={14} className="text-gray-400" />
                    </label>
                    <input
                        type="text"
                        placeholder=""
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        Password <span className="text-red-500">*</span>
                        <Info size={14} className="text-gray-400" />
                    </label>
                    <input
                        type="password"
                        placeholder=""
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                </div>

                {/* Role */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        Role <span className="text-red-500">*</span>
                        <Info size={14} className="text-gray-400" />
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white">
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="doer">Doer</option>
                        <option value="auditor">Auditor</option>
                    </select>
                </div>

                {/* Branch */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        Branch <span className="text-red-500">*</span>
                        <Info size={14} className="text-gray-400" />
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white">
                        <option value="">Select Branch</option>
                        <option value="b1">Branch 1</option>
                    </select>
                </div>

                {/* Department */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        Department <span className="text-red-500">*</span>
                        <Info size={14} className="text-gray-400" />
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white">
                        <option value="">Select Dept</option>
                        <option value="d1">Dept 1</option>
                    </select>
                </div>

                {/* TL Name */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        TL Name <span className="text-red-500">*</span>
                        <Info size={14} className="text-gray-400" />
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white">
                        <option value="">Select One</option>
                    </select>
                </div>
            </div>

            {/* Profile Photo */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    Profile Photo <span className="text-red-500">*</span>
                    <Info size={14} className="text-gray-400" />
                </label>
                <div className="flex items-center gap-4">
                    <input
                        type="file"
                        className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                    />
                </div>
                <p className="text-xs text-orange-500 mt-1">
                    Wait until file is uploaded: No file chosen
                </p>
                <p className="text-xs text-gray-400">
                    Allowed types: jpg, jpeg, png, gif
                </p>
            </div>

            {/* Make Auditor */}
            <div className="flex items-center gap-2 pt-4">
                <input
                    id="makeAuditor"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="makeAuditor" className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    Make Auditor
                    <Info size={14} className="text-gray-400" />
                </label>
            </div>
        </div>
    );
}
