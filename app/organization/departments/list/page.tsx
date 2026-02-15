import { PageShell } from "@/components/layout/page-shell";
import { DepartmentTable } from "@/components/organization/department-table";
import { DepartmentFilter } from "@/components/organization/department-filter";

export default async function DepartmentListPage() {
    // Delay removed for production


    return (
        <PageShell breadcrumb={["Organization", "List Department"]}>
            <div className="space-y-6">
                <DepartmentFilter />
                <DepartmentTable />
            </div>
        </PageShell>
    );
}
