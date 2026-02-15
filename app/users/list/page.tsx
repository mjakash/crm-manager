"use client";

import { PageShell } from "@/components/layout/page-shell";
import { UserFilter } from "@/components/users/user-filter";
import { UserListTable } from "@/components/users/user-list-table";

export default function UserListPage() {
    return (
        <PageShell>
            <UserFilter />
            <UserListTable />
        </PageShell>
    );
}
