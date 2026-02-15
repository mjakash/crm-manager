import { PageShell } from "@/components/layout/page-shell";
import { BranchTable } from "@/components/organization/branch-table";
import { BranchFilter } from "@/components/organization/branch-filter";

export default async function BranchListPage() {
    // Delay removed for production


    return (
        <PageShell breadcrumb={["Organization", "List Branch"]}>
            <div className="space-y-6">
                <BranchFilter />
                <BranchTable />
            </div>
        </PageShell>
    );
}
