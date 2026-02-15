"use client";

import { PageShell } from "@/components/layout/page-shell";
import { BulkUploadForm } from "@/components/users/bulk-upload-form";

export default function BulkUploadPage() {
    return (
        <PageShell>
            <BulkUploadForm />
        </PageShell>
    );
}
