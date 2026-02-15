import { PageShell } from "@/components/layout/page-shell";
import { AddTicketForm } from "@/components/help-ticket/add-ticket-form";

export default function AddTicketPage() {
    return (
        <PageShell breadcrumb={["Help Ticket", "Add New Ticket"]}>
            <AddTicketForm />
        </PageShell>
    );
}
