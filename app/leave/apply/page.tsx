import { PageShell } from "@/components/layout/page-shell";
import { LeaveApplyForm } from "@/components/leave/leave-apply-form";
import { MyLeaveHistory } from "@/components/leave/my-leave-history";

export default function LeaveApplyPage() {
    return (
        <PageShell breadcrumb={["Leave Management", "Leave Apply"]}>
            <div className="space-y-6">
                <LeaveApplyForm />
                <MyLeaveHistory />
            </div>
        </PageShell>
    );
}
