"use client";

import { Edit, Trash2, ArrowUpDown } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";

export function CompanyTable() {
    // Placeholder data
    const companies = [
        { id: 1, name: "Acme Corp", email: "contact@acme.com", phone: "+1 234 567 890", address: "123 Main St", status: "Active" },
        { id: 2, name: "Globex Inc", email: "info@globex.com", phone: "+1 987 654 321", address: "456 Market St", status: "Inactive" },
    ];

    return (
        <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">LIST COMPANIES</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-white border-b border-gray-100">
                        <tr>
                            <th className="px-4 py-3 font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Company Name <ArrowUpDown size={14} className="text-gray-400" />
                                </div>
                            </th>
                            <th className="px-4 py-3 font-bold">Email</th>
                            <th className="px-4 py-3 font-bold">Phone</th>
                            <th className="px-4 py-3 font-bold">Address</th>
                            <th className="px-4 py-3 font-bold">Status</th>
                            <th className="px-4 py-3 font-bold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {companies.map((company) => (
                            <tr key={company.id} className="bg-white hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-4 font-medium text-gray-900">{company.name}</td>
                                <td className="px-4 py-4 text-gray-600">{company.email}</td>
                                <td className="px-4 py-4 text-gray-600">{company.phone}</td>
                                <td className="px-4 py-4 text-gray-600">{company.address}</td>
                                <td className="px-4 py-4">
                                    <StatusBadge status={company.status} />
                                </td>
                                <td className="px-4 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                            <Edit size={16} />
                                        </button>
                                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                <span>Showing 2 records</span>
            </div>
        </div>
    );
}
