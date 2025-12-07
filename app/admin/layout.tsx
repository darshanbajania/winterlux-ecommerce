"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, ShoppingBag, Package, Users, Settings, LogOut } from "lucide-react"

import { useAuth } from "@/context/AuthContext"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const { logout } = useAuth()

    const links = [
        { href: "/admin/dashboard", label: "Overview", icon: LayoutDashboard },
        { href: "/admin/products", label: "Products", icon: Package },
        { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
        { href: "/admin/users", label: "Users & Queries", icon: Users },
        { href: "/admin/settings", label: "Settings", icon: Settings },
    ]

    return (
        <div className="flex min-h-[calc(100vh-80px)] bg-slate-50">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col text-slate-300">
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-8 px-2 text-white">
                        <span className="font-bold text-xl tracking-tight">WinterLux Admin</span>
                    </div>

                    <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-2">Menu</h2>
                    <nav className="space-y-1">
                        {links.map((link) => {
                            const Icon = link.icon
                            // Check for active state (exact match or sub-path)
                            const isActive = pathname === link.href || (link.href !== "/admin/dashboard" && pathname.startsWith(link.href))

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-slate-800 text-white shadow-sm"
                                            : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                                    )}
                                >
                                    <Icon className="w-4 h-4" />
                                    {link.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
                <div className="p-6 border-t border-slate-800 mt-auto">
                    <button
                        onClick={logout}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:bg-red-900/20 hover:text-red-400 w-full transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Mobile Header (TODO if needed, for now desktop optimization) */}

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto h-[calc(100vh-80px)]">
                {children}
            </main>
        </div>
    )
}
