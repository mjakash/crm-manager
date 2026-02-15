import { PageShell } from "@/components/layout/page-shell";
import { CompanyTable } from "@/components/organization/company-table";
import { CompanyFilter } from "@/components/organization/company-filter";

export default async function CompanyListPage() {
    // Delay removed for production


    return (
        <PageShell breadcrumb={["Organization", "List Company"]}>
            <div className="space-y-6">
                <CompanyFilter />
                <CompanyTable />
            </div>
        </PageShell>
    );
}
