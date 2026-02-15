"use client";

export function AddDepartmentForm() {
    return (
        <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide mb-8 border-b border-gray-100 pb-4">ADD NEW DEPARTMENT</h2>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Branch <span className="text-red-500">*</span></label>
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all">
                            <option>Select Branch</option>
                            <option>Headquarters</option>
                            <option>West Coast Hub</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Department Name <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Department Head</label>
                        <input type="text" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all" />
                    </div>
                </div>

                <div className="pt-4 flex justify-end gap-3">
                    <button type="button" className="px-6 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors">
                        Cancel
                    </button>
                    <button type="submit" className="px-6 py-2.5 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200">
                        Save Department
                    </button>
                </div>
            </form>
        </div>
    );
}
