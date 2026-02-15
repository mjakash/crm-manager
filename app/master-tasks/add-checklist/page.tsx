import { PageShell } from "@/components/layout/page-shell";
import { AddChecklistForm } from "@/components/master-tasks/add-checklist-form";

export default function AddChecklistPage() {
    return (
        <PageShell breadcrumb={["Master Tasks", "Add Checklist"]}>
            <AddChecklistForm />
        </PageShell>
    );
}
