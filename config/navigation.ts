import {
    Home,
    Users,
    UserCheck,
    MessageCircle,
    CalendarClock,
    Droplet,
    BarChart3,
    FileText,
    CheckSquare,
    ListChecks,
    PlusSquare,
    UserPlus,
    UploadCloud,
    Activity,
    Box,
    FolderKanban,
    Factory,
    ShoppingCart,
    HelpCircle,
    Clock,
    UserX,
    UserCog,
    List,
    Building2,
    Settings,
    Layers,
    Network,
    Rocket
} from "lucide-react";

export type NavItem = {
    name: string;
    href: string;
    icon: any;
    children?: NavItem[];
};

// Navigation Items Configuration

export const navItems: NavItem[] = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Customer Group", href: "/customer-group", icon: Users },
    { name: "Clients", href: "/clients", icon: UserCheck },
    { name: "WhatsApp Template", href: "/whatsapp-template", icon: MessageCircle },
    { name: "Schedule Manager", href: "/schedule-manager", icon: CalendarClock },
    { name: "Drip Manager", href: "/drip-manager", icon: Droplet },
    { name: "PC Reports View", href: "/reports", icon: BarChart3 },
    { name: "Audit", href: "/audit", icon: FileText },
    {
        name: "Master Tasks",
        href: "#",
        icon: CheckSquare,
        children: [
            { name: "List Checklist", href: "/master-tasks/list-checklist", icon: ListChecks },
            { name: "Add Checklist", href: "/master-tasks/add-checklist", icon: PlusSquare },
            { name: "List Delegation", href: "/master-tasks/list-delegation", icon: Users },
            { name: "Add Delegation", href: "/master-tasks/add-delegation", icon: UserPlus },
            { name: "Bulk Upload", href: "/master-tasks/bulk-upload", icon: UploadCloud },
        ]
    },
    { name: "FMS Manager", href: "/fms-manager", icon: Activity },
    { name: "IMS", href: "/ims", icon: Box },
    { name: "Project Manager", href: "/project-manager", icon: FolderKanban },
    { name: "Production Manager", href: "/production-manager", icon: Factory },
    { name: "Sales", href: "/sales", icon: ShoppingCart },
    {
        name: "Help Ticket",
        href: "#",
        icon: HelpCircle,
        children: [
            { name: "List All Help Ticket", href: "/help-ticket/list", icon: List },
            { name: "Add New Ticket", href: "/help-ticket/add", icon: PlusSquare },
            { name: "Assigned To Me", href: "/help-ticket/assigned-to-me", icon: UserCheck },
            { name: "Assigned By Me", href: "/help-ticket/assigned-by-me", icon: Users },
        ]
    },
    { name: "Attendance", href: "/attendance", icon: Clock },
    {
        name: "Leave Register",
        href: "#",
        icon: UserX,
        children: [
            { name: "Leave List", href: "/leave/list", icon: List },
            { name: "Leave Apply", href: "/leave/apply", icon: PlusSquare },
        ]
    },
    {
        name: "Users",
        href: "#",
        icon: UserCog,
        children: [
            { name: "List User", href: "/users/list", icon: List },
            { name: "Add User", href: "/users/add", icon: UserPlus },
            { name: "Bulk Upload", href: "/users/bulk-upload", icon: UploadCloud },
        ]
    },
    {
        name: "Organization",
        href: "#",
        icon: Building2,
        children: [
            { name: "List Company", href: "/organization/companies/list", icon: List },
            { name: "Add Company", href: "/organization/companies/add", icon: PlusSquare },
            { name: "List Branch", href: "/organization/branches/list", icon: List },
            { name: "Add Branch", href: "/organization/branches/add", icon: PlusSquare },
            { name: "List Department", href: "/organization/departments/list", icon: List },
            { name: "Add Department", href: "/organization/departments/add", icon: PlusSquare },
        ]
    },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Resources", href: "/resources", icon: Layers },
    { name: "Intranet", href: "/intranet", icon: Network },
    { name: "Quick Launch", href: "/quick-launch", icon: Rocket },
];
