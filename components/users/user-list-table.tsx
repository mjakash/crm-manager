"use client";

import { ArrowUpDown, Edit, Trash2, ShieldAlert, User } from "lucide-react";

export function UserListTable() {
    // Mock Data based on screenshot
    const users = [
        { id: 1, name: "dj", username: "dj", email: "", phone: "1234567884", role: "Others", department: "", status: "INACTIVE" },
        { id: 2, name: "Aman", username: "Aman", email: "aman@gmail.com", phone: "6291142201", role: "Doer", department: "", status: "INACTIVE" },
        { id: 3, name: "doer2", username: "doer2", email: "", phone: "1234567890", role: "Doer", department: "", status: "INACTIVE" },
        { id: 4, name: "karmakar kiran", username: "karmakar", email: "kiran18072003@gmail.com", phone: "8420219409", role: "Doer", department: "", status: "INACTIVE" },
        { id: 5, name: "RIMI", username: "RIMI1", email: "sudarshanahalder54@gmail.com", phone: "7439384492", role: "Doer", department: "", status: "INACTIVE" },
        { id: 6, name: "test", username: "dubai user test", email: "test@gmail.com", phone: "9719746517357", role: "Auditor", department: "", status: "INACTIVE" },
        { id: 7, name: "test_auditor2", username: "test_auditor2", email: "", phone: "1234587890", role: "Doer", department: "", status: "INACTIVE" },
        { id: 8, name: "test_auditor", username: "test_auditor", email: "auditor@gmail.com", phone: "8479808654", role: "Auditor", department: "", status: "INACTIVE" },
        { id: 9, name: "TESTING 2", username: "TESTING 2", email: "", phone: "645345643", role: "PC", department: "", status: "INACTIVE" },
    ];

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">LIST USERS</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[1000px]">
                    <thead>
                        <tr className="bg-white border-b border-gray-100">
                            <th className="px-6 py-4 text-left">
                                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase cursor-pointer group">
                                    <span className="sr-only">Avatar</span>
                                </div>
                            </th>
                            <th className="px-6 py-4 text-left">
                                <div className="flex items-center gap-1 text-xs font-bold text-blue-600 uppercase cursor-pointer group">
                                    Name <ArrowUpDown size={14} />
                                </div>
                            </th>
                            <th className="px-6 py-4 text-left">
                                <div className="flex items-center gap-1 text-xs font-bold text-blue-600 uppercase cursor-pointer group">
                                    Username <ArrowUpDown size={14} />
                                </div>
                            </th>
                            <th className="px-6 py-4 text-left">
                                <div className="flex items-center gap-1 text-xs font-bold text-blue-600 uppercase cursor-pointer group">
                                    Email <ArrowUpDown size={14} />
                                </div>
                            </th>
                            <th className="px-6 py-4 text-left">
                                <div className="flex items-center gap-1 text-xs font-bold text-blue-600 uppercase cursor-pointer group">
                                    Phone No <ArrowUpDown size={14} />
                                </div>
                            </th>
                            <th className="px-6 py-4 text-left">
                                <div className="flex items-center gap-1 text-xs font-bold text-blue-600 uppercase cursor-pointer group">
                                    Role <ArrowUpDown size={14} />
                                </div>
                            </th>
                            <th className="px-6 py-4 text-left">
                                <div className="text-xs font-bold text-gray-500 uppercase">Department</div>
                            </th>
                            <th className="px-6 py-4 text-left">
                                <div className="text-xs font-bold text-gray-500 uppercase">Action</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                                        <User size={20} className="fill-current" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.username}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-600 font-mono">{user.phone}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.department}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200">
                                            <Edit size={16} />
                                        </button>
                                        <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200">
                                            <Trash2 size={16} />
                                        </button>
                                        <button className="px-3 py-1 bg-gray-500 text-white text-xs font-medium rounded hover:bg-gray-600 transition-colors uppercase">
                                            INACTIVE
                                        </button>
                                        <button className="px-3 py-1 bg-[#F43F5E] text-white text-xs font-medium rounded hover:bg-[#E11D48] transition-colors uppercase">
                                            PENALTY
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                <div className="text-xs text-gray-500">
                    Showing 1 to {users.length} of 281 records
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Go to Page:</span>
                    <select className="border border-gray-200 rounded px-2 py-1 text-xs focus:outline-none focus:border-blue-500">
                        <option>1</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
