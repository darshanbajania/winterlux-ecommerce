"use client"

import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export default function OrdersPage() {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">My Orders</h1>
                <p className="text-muted-foreground">View and manage your order history.</p>
            </div>

            <Card className="bg-white border-none shadow-sm overflow-hidden p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 font-medium">Order ID</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium">Total</th>
                                <th className="px-6 py-4 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {[
                                { id: "#ORD-7352", date: "Oct 24, 2025", status: "Delivered", total: "$299.00", statusColor: "text-green-600 bg-green-50" },
                                { id: "#ORD-7351", date: "Oct 20, 2025", status: "Processing", total: "$189.00", statusColor: "text-orange-600 bg-orange-50" },
                                { id: "#ORD-7350", date: "Sep 12, 2025", status: "Delivered", total: "$450.00", statusColor: "text-green-600 bg-green-50" },
                                { id: "#ORD-7120", date: "Aug 05, 2025", status: "Delivered", total: "$120.00", statusColor: "text-green-600 bg-green-50" },
                                { id: "#ORD-7001", date: "Jul 15, 2025", status: "Delivered", total: "$89.50", statusColor: "text-green-600 bg-green-50" },
                            ].map((order) => (
                                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium">{order.id}</td>
                                    <td className="px-6 py-4 text-slate-500">{order.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-medium">{order.total}</td>
                                    <td className="px-6 py-4">
                                        <Button variant="ghost" size="sm">View</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    )
}
