import { PageShell } from "@/components/layout/page-shell";
import { HelpTicketFilter } from "@/components/help-ticket/help-ticket-filter";
import { HelpTicketTable } from "@/components/help-ticket/help-ticket-table";

export default async function HelpTicketListPage() {
    // Delay removed for production


    return (
        <PageShell breadcrumb={["Help Ticket", "List All Help Ticket"]}>
            <div className="space-y-6">
                <HelpTicketFilter />
                <HelpTicketTable />
            </div>
        </PageShell>
    );
}
