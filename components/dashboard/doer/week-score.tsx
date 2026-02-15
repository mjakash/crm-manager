"use client";

export function WeekScore() {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col justify-center">
            <h3 className="text-sm font-bold text-gray-900 mb-4 text-center">Week Score</h3>

            <div className="grid grid-cols-3 gap-4 text-center text-xs font-semibold text-gray-900 border-b border-gray-100 pb-2 mb-2">
                <div></div>
                <div className="text-gray-900">Previous</div>
                <div className="text-gray-900">Current</div>
            </div>

            <div className="space-y-3 text-xs">
                <div className="grid grid-cols-3 gap-4 text-center items-center">
                    <div className="text-left font-medium text-gray-600">Checklist</div>
                    <div className="text-gray-900">-28</div>
                    <div className="text-gray-900">-94.44</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center items-center">
                    <div className="text-left font-medium text-gray-600">Delegation</div>
                    <div className="text-gray-900">0</div>
                    <div className="text-gray-900">0.00</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center items-center">
                    <div className="text-left font-medium text-gray-600">FMS</div>
                    <div className="text-gray-900">-9.09</div>
                    <div className="text-gray-900">-10.45</div>
                </div>
            </div>
        </div>
    );
}
