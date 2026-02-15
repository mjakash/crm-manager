import { PageShell } from "@/components/layout/page-shell";
import { ChecklistFilter } from "@/components/master-tasks/checklist-filter";
import { ChecklistTable } from "@/components/master-tasks/checklist-table";

export default async function ListChecklistPage() {
    // Delay removed for production


    return (
        <PageShell breadcrumb={["Master Tasks", "List Checklist"]}>
            <div className="space-y-6">
                <ChecklistFilter />
                <ChecklistTable />
            </div>
        </PageShell>
    );
}
