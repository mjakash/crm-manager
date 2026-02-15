import { PageShell } from "@/components/layout/page-shell";
import { AddDelegationForm } from "@/components/master-tasks/add-delegation-form";

export default function AddDelegationPage() {
    return (
        <PageShell breadcrumb={["Master Tasks", "Add Delegation"]}>
            <AddDelegationForm />
        </PageShell>
    );
}
