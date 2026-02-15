import { PageShell } from "@/components/layout/page-shell";
import { DelegationFilter } from "@/components/master-tasks/delegation-filter";
import { DelegationTable } from "@/components/master-tasks/delegation-table";

export default function ListDelegationPage() {
    return (
        <PageShell breadcrumb={["Master Tasks", "List Delegation"]}>
            <div className="space-y-6">
                <DelegationFilter />
                <DelegationTable />
            </div>
        </PageShell>
    );
}
