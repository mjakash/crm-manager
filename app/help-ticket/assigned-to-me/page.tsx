import { PageShell } from "@/components/layout/page-shell";
import { HelpTicketFilter } from "@/components/help-ticket/help-ticket-filter";
import { AssignedToMeTable } from "@/components/help-ticket/assigned-to-me-table";

export default function AssignedToMePage() {
    return (
        <PageShell breadcrumb={["Help Ticket", "Assigned To Me"]}>
            <div className="space-y-6">
                <HelpTicketFilter />
                <AssignedToMeTable />
            </div>
        </PageShell>
    );
}
