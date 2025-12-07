"use client"

import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Mail, User } from "lucide-react"
import { useState, useEffect } from "react"
import { API_BASE_URL } from "@/lib/utils"

export default function AdminUsersPage() {
    const [users, setUsers] = useState<any[]>([])
    const [tickets, setTickets] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("access_token")
            const headers = { "Authorization": `Bearer ${token}` }

            try {
                const [userRes, ticketRes] = await Promise.all([
                    fetch(`${API_BASE_URL}/accounts/admin/users/`, { headers }),
                    fetch(`${API_BASE_URL}/tickets/`, { headers })
                ])

                if (userRes.ok) setUsers(await userRes.json())
                if (ticketRes.ok) setTickets(await ticketRes.json())

            } catch (e) {
                console.error(e)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Users List */}
            <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Users</h2>
                </div>

                <Card className="border-none shadow-sm bg-white overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                                <tr>
                                    <th className="px-6 py-4 font-medium">User</th>
                                    <th className="px-6 py-4 font-medium">Role</th>
                                    <th className="px-6 py-4 font-medium">Joined</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {users.length === 0 && (
                                    <tr><td colSpan={3} className="p-4 text-center">No users found.</td></tr>
                                )}
                                {users.map((u: any) => (
                                    <tr key={u.id} className="hover:bg-slate-50/50">
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                                                <User className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900">{u.username}</p>
                                                <p className="text-xs text-slate-500">{u.email}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500">{u.is_staff ? 'Admin' : 'Customer'}</td>
                                        <td className="px-6 py-4 text-slate-500">{new Date(u.date_joined).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>

            {/* Queries / Support */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Recent Queries</h2>
                <div className="space-y-4">
                    {tickets.length === 0 && <p className="text-slate-500">No support tickets.</p>}
                    {tickets.map((t: any) => (
                        <Card key={t.id} className="p-4 border-none shadow-sm bg-white hover:shadow-md transition-shadow cursor-pointer">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-blue-500" />
                                    <span className="font-medium text-sm">{t.subject}</span>
                                </div>
                                <span className="text-xs text-slate-400">{new Date(t.created_at).toLocaleDateString()}</span>
                            </div>
                            <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                                {t.message}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-slate-500">From: {t.username}</span>
                                <span className="text-xs px-2 py-1 rounded bg-slate-100">{t.status}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
