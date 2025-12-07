"use client"

import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Badge } from "lucide-react"

export default function AdminOrdersPage() {
    const orders = [
        { id: "#ORD-001", customer: "John Doe", date: "2025-10-24", total: "$299.00", status: "Delivered", items: 2 },
        { id: "#ORD-002", customer: "Sarah Smith", date: "2025-10-23", total: "$120.50", status: "Processing", items: 1 },
        { id: "#ORD-003", customer: "Michael Brown", date: "2025-10-22", total: "$540.00", status: "Shipped", items: 3 },
        { id: "#ORD-004", customer: "Emily Davis", date: "2025-10-21", total: "$89.99", status: "Pending", items: 1 },
        { id: "#ORD-005", customer: "James Wilson", date: "2025-10-20", total: "$299.00", status: "Delivered", items: 1 },
    ]

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Delivered': return 'bg-green-50 text-green-700'
            case 'Processing': return 'bg-blue-50 text-blue-700'
            case 'Shipped': return 'bg-purple-50 text-purple-700'
            case 'Pending': return 'bg-orange-50 text-orange-700'
            default: return 'bg-slate-50 text-slate-700'
        }
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Orders</h1>
                <p className="text-slate-500">Manage and track customer orders.</p>
            </div>

            <Card className="border-none shadow-sm bg-white overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 font-medium">Order ID</th>
                                <th className="px-6 py-4 font-medium">Customer</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Items</th>
                                <th className="px-6 py-4 font-medium">Total</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">{order.id}</td>
                                    <td className="px-6 py-4 text-slate-500">{order.customer}</td>
                                    <td className="px-6 py-4 text-slate-500">{order.date}</td>
                                    <td className="px-6 py-4 text-slate-500">{order.items} items</td>
                                    <td className="px-6 py-4 font-medium">{order.total}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Button variant="outline" size="sm">Details</Button>
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
