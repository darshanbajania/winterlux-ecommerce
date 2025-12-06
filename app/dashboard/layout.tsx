"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, ShoppingBag, Heart, Settings, LogOut } from "lucide-react"

import { useAuth } from "@/context/AuthContext"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const { logout } = useAuth()

    const links = [
        { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
        { href: "/dashboard/orders", label: "Orders", icon: ShoppingBag },
        { href: "/dashboard/wishlist", label: "Wishlist", icon: Heart },
        { href: "/dashboard/settings", label: "Settings", icon: Settings },
    ]

    return (
        <div className="flex min-h-[calc(100vh-80px)] bg-slate-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 hidden md:block">
                <div className="p-6">
                    <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Menu</h2>
                    <nav className="space-y-1">
                        {links.map((link) => {
                            const Icon = link.icon
                            const isActive = pathname === link.href
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-primary text-primary-foreground"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    )}
                                >
                                    <Icon className="w-4 h-4" />
                                    {link.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
                <div className="p-6 border-t border-slate-100 mt-auto">
                    <button
                        onClick={logout}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 w-full transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </button>
                </div>
            </aside>


            {/* Main Content */}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    )
}
