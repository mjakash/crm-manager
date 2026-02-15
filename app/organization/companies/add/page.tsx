import { PageShell } from "@/components/layout/page-shell";
import { AddCompanyForm } from "@/components/organization/add-company-form";

export default function AddCompanyPage() {
    return (
        <PageShell breadcrumb={["Organization", "Add Company"]}>
            <AddCompanyForm />
        </PageShell>
    );
}
