"use client";

import { Info } from "lucide-react";
import { useState } from "react";

type PrivilegeGroup = {
    name: string;
    items: string[];
};

const privilegeGroups: PrivilegeGroup[] = [
    {
        name: "Manage Users",
        items: ["Add", "List", "Edit", "Delete", "Export", "Privilege Details"]
    },
    {
        name: "Manage Clients",
        items: ["Add Customer", "List Customer", "Delete Customer", "Import Customer", "Assign Customer", "Edit Customer", "Delete With Status", "Assign From Planned Call List", "Delegation Planned Call List"]
    },
    {
        name: "WhatsApp Template",
        items: ["Add", "Edit", "List", "Delete"]
    },
    {
        name: "Schedule Manager",
        items: ["Schedule Manager", "Schedule Log", "Conversation Log", "Reply Automatically Log", "Schedule Group Message", "Reset Schedule Log"]
    },
    {
        name: "Drip Manager",
        items: ["Add", "Edit", "Delete"]
    },
    {
        name: "PC Reports View",
        items: ["End Date Task", "Date Wise", "User Contribution View", "Weekly WS Score", "Customer Given", "Edit FMS Task", "Audit Report", "Client's Details View", "WhatsApp Logs", "Future Followup", "Not Marked", "Unknown", "Marked But Pending", "Summary", "Delegation Non-task Points", "Delegation Not-interested Points", "Client's Datasheet", "Master Report", "Only Planned Call", "Intercom Summary", "Telecaller Manager", "Visitor Report", "History For Delete", "Archive Chat", "Contact Log"]
    },
    {
        name: "Audit",
        items: ["Audit List", "Add Audit List", "Assign Audit", "Audit Form Create", "Delete Assigned"]
    },
    {
        name: "Master Tasks",
        items: ["Add Checklist", "List Checklist", "Edit", "Delete", "Add Detail Checklist", "List Detail Checklist", "Add Category", "List Category", "Edit Category", "Delete Category", "Add Delegation", "List Delegation", "Edit Delegation", "Delete Delegation", "Delegation Married CheckList", "Bulk Upload"]
    },
    {
        name: "FMS Manager",
        items: ["Add", "List", "Edit", "Delete", "Add Step", "List Step", "Edit Step", "Delete Step", "Add Stage", "List Stage", "Edit Stage", "Delete Stage", "Link Stage", "Add Period", "List Period", "Edit Period", "Delete Period", "Add Group", "List Group", "Edit Group", "Delete Group", "Add Type", "List Type", "Edit Type", "Delete Type"]
    },
    {
        name: "IMS",
        items: ["Add Category", "List Category", "Edit Category", "Delete Category", "Add Product", "List Product", "Edit Product", "Delete Product", "Add Order", "List Order", "Edit Order", "Delete Order"]
    },
    {
        name: "Project Manager",
        items: ["Add Task List", "List Task List", "Edit Task List", "Delete Task List", "Add Subtask", "List Subtask", "Edit Subtask", "Delete Subtask", "Add Category", "List Category", "Edit Category", "Delete Category", "Manage Status", "Manage Priority", "Add Project", "List Project", "Edit Project", "Delete Project"]
    },
    {
        name: "Production Manager",
        items: ["Add Task List", "List Task List", "Edit Task List", "Delete Task List", "Add Subtask", "List Subtask", "Edit Subtask", "Delete Subtask", "Add Project", "List Project", "Edit Project", "Delete Project", "Manage Category", "Manage Status", "Manage Priority"]
    },
    {
        name: "Sales",
        items: ["Add SO", "List SO", "Edit SO", "Delete SO", "Add Invoice", "List Invoice", "Edit Invoice", "Delete Invoice", "Add Quotation", "List Quotation", "Edit Quotation", "Delete Quotation", "Add Customer", "List Customer", "Edit Customer", "Delete Customer"]
    },
    {
        name: "Help Ticket",
        items: ["Create", "List", "Assign", "Resolve", "Close", "Delete"]
    },
    {
        name: "Attendance",
        items: ["Attendance Configure", "Check In / Out", "Summary Report", "Attendance Log System", "List Absent User"]
    },
    {
        name: "Leave Register",
        items: ["Apply", "Approve", "List", "Reject", "Leave Policy", "Leave Type", "Delete"]
    },
    {
        name: "Organization",
        items: ["Add Branch", "List Branch", "Edit Branch", "Delete Branch", "Add Company", "List Company", "Active Company", "Edit Company", "Delete Company", "Add Department", "List Department", "Delete Department"]
    },
    {
        name: "Settings",
        items: ["General Settings", "Email Settings", "SMS Settings", "Notification Settings", "Payment Gateway"]
    },
    {
        name: "Resources",
        items: ["Training Videos", "Banner News", "Add Video", "List Video Category", "Add Video Category", "Video Category List", "Share Category Video", "Delete Video", "Edit Video"]
    },
    {
        name: "Intranet",
        items: ["Add", "Edit", "List", "Delete", "Resource", "Category Add", "Category List", "Category Delete", "Category Edit"]
    },
    {
        name: "Quick Launch",
        items: ["Launch", "Configure", "History", "Permissions"]
    }
];

export function PrivilegeSelector() {
    // In a real app, state would be managed here or lifted up
    const [selected, setSelected] = useState<Record<string, boolean>>({});

    const toggleGroup = (groupName: string, items: string[]) => {
        // Simple toggle logic example
    };

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-6 mt-8">
            <h3 className="text-sm font-bold text-gray-700 uppercase flex items-center gap-2">
                Select User Privilege <Info size={16} className="text-gray-400" />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {privilegeGroups.map((group) => (
                    <div key={group.name} className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                            <input
                                id={`group-${group.name}`}
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            />
                            <label htmlFor={`group-${group.name}`} className="text-sm font-bold text-gray-700 capitalize">
                                {group.name}
                            </label>
                        </div>
                        <div className="space-y-2 pl-1">
                            {group.items.map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <input
                                        id={`${group.name}-${item}`}
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                    />
                                    <label htmlFor={`${group.name}-${item}`} className="text-xs text-gray-600">
                                        {item}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-8 flex justify-center">
                <button className="px-12 py-3 bg-[#3B82F6] text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-md uppercase tracking-wide">
                    Submit
                </button>
            </div>
        </div>
    );
}
