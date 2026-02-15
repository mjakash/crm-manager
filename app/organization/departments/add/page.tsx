import { PageShell } from "@/components/layout/page-shell";
import { AddDepartmentForm } from "@/components/organization/add-department-form";

export default function AddDepartmentPage() {
    return (
        <PageShell breadcrumb={["Organization", "Add Department"]}>
            <AddDepartmentForm />
        </PageShell>
    );
}
