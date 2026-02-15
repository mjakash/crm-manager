"use client";

export function PendingTasks() {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col justify-center">
            <h3 className="text-sm font-bold text-gray-900 mb-4 text-center">Pending Task</h3>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex justify-between text-xs">
                    <span className="font-medium text-gray-600">Checklist</span>
                    <span className="font-bold text-gray-900">20</span>
                </div>
                <div className="flex justify-between text-xs">
                    <span className="font-medium text-gray-600">Delegation</span>
                    <span className="font-bold text-gray-900">0</span>
                </div>

                <div className="flex justify-between text-xs">
                    <span className="font-medium text-gray-600">FMS</span>
                    <span className="font-bold text-gray-900">50</span>
                </div>
                <div className="flex justify-between text-xs">
                    <span className="font-medium text-gray-600">Help-Ticket</span>
                    <span className="font-bold text-gray-900">0</span>
                </div>

                <div className="flex justify-between text-xs">
                    <span className="font-medium text-gray-600">PMS</span>
                    <span className="font-bold text-gray-900">0</span>
                </div>
                <div className="flex justify-between text-xs">
                    <span className="font-medium text-gray-600">Auditor</span>
                    <span className="font-bold text-gray-900">0</span>
                </div>
            </div>
        </div>
    );
}

