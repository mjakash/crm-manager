import { PageShell } from "@/components/layout/page-shell";
import { LeaveFilter } from "@/components/leave/leave-filter";
import { LeaveListTable } from "@/components/leave/leave-list-table";

export default async function LeaveListPage() {
    // Delay removed for production


    return (
        <PageShell breadcrumb={["Leave Management", "Leave List"]}>
            <div className="space-y-6">
                <LeaveFilter />
                <LeaveListTable />
            </div>
        </PageShell>
    );
}
