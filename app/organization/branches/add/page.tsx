import { PageShell } from "@/components/layout/page-shell";
import { AddBranchForm } from "@/components/organization/add-branch-form";

export default function AddBranchPage() {
    return (
        <PageShell breadcrumb={["Organization", "Add Branch"]}>
            <AddBranchForm />
        </PageShell>
    );
}
