"use client";

import { PageShell } from "@/components/layout/page-shell";
import { AddUserForm } from "@/components/users/add-user-form";
import { PrivilegeSelector } from "@/components/users/privilege-selector";

export default function AddUserPage() {
    return (
        <PageShell>
            <AddUserForm />
            <PrivilegeSelector />
        </PageShell>
    );
}
