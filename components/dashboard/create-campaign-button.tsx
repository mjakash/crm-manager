import { Plus } from "lucide-react";

export function CreateCampaignButton() {
    return (
        <button className="bg-[#064E3B] hover:bg-[#065F46] text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-medium transition-colors shadow-lg shadow-green-900/10">
            <Plus className="w-4 h-4" />
            Create campaigns
        </button>
    );
}
