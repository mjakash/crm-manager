import { PageShell } from "@/components/layout/page-shell";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";

export default function Loading() {
    return (
        <PageShell breadcrumb={["Help Ticket", "Loading..."]}>
            <LoadingSkeleton />
        </PageShell>
    );
}
