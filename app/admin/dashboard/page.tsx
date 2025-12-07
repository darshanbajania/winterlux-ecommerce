"use client"

import { Button } from "@/components/ui/Button"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

export default function AdminDashboard() {
    const { user, logout } = useAuth()
    const router = useRouter()

    if (!user) {
        // Should ideally be handled by middleware or protected route component
        // router.push("/login")
        return null
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <div className="flex items-center gap-4">
                    <span>Welcome, {user.name || user.email} (Admin)</span>
                    <Button onClick={logout} variant="outline">Sign Out</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h2 className="text-xl font-bold mb-4">Trades</h2>
                    <p className="text-muted-foreground">View and manage all trades here.</p>
                    <div className="mt-4 p-4 bg-slate-50 rounded text-sm text-slate-500">
                        No active trades currently.
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h2 className="text-xl font-bold mb-4">Users</h2>
                    <p className="text-muted-foreground">Manage user accounts.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h2 className="text-xl font-bold mb-4">Settings</h2>
                    <p className="text-muted-foreground">System configuration.</p>
                </div>
            </div>
        </div>
    )
}
