"use client"

import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Mail, User } from "lucide-react"

export default function AdminUsersPage() {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Users List */}
            <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Users</h2>
                    <Button variant="outline" size="sm">Export CSV</Button>
                </div>

                <Card className="border-none shadow-sm bg-white overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                                <tr>
                                    <th className="px-6 py-4 font-medium">User</th>
                                    <th className="px-6 py-4 font-medium">Role</th>
                                    <th className="px-6 py-4 font-medium">Joined</th>
                                    <th className="px-6 py-4 font-medium text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-slate-50/50">
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                                                <User className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900">User {i}</p>
                                                <p className="text-xs text-slate-500">user{i}@example.com</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500">Customer</td>
                                        <td className="px-6 py-4 text-slate-500">Oct {20 + i}, 2025</td>
                                        <td className="px-6 py-4 text-right">
                                            <Button variant="ghost" size="sm">Manage</Button>
                                        </td>
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
                    {[1, 2, 3].map((i) => (
                        <Card key={i} className="p-4 border-none shadow-sm bg-white hover:shadow-md transition-shadow cursor-pointer">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-blue-500" />
                                    <span className="font-medium text-sm">Return Request</span>
                                </div>
                                <span className="text-xs text-slate-400">2h ago</span>
                            </div>
                            <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                                I received my order #ORD-7352 but the size is too small. I would like to initiate a return...
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-slate-500">From: User {i}</span>
                                <Button size="sm" variant="outline" className="h-7 text-xs">Reply</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
