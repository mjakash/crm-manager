import { PageShell } from "@/components/layout/page-shell";
import { HelpTicketFilter } from "@/components/help-ticket/help-ticket-filter";
import { AssignedByMeTable } from "@/components/help-ticket/assigned-by-me-table";

export default function AssignedByMePage() {
    return (
        <PageShell breadcrumb={["Help Ticket", "Assigned By Me"]}>
            <div className="space-y-6">
                <HelpTicketFilter />
                <AssignedByMeTable />
            </div>
        </PageShell>
    );
}
