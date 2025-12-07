"use client"

import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { useState, useEffect } from "react"

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState<any[]>([])

    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem("access_token")
            try {
                const res = await fetch("http://127.0.0.1:8000/api/orders/", {
                    headers: { "Authorization": `Bearer ${token}` }
                })
                if (res.ok) {
                    const data = await res.json()
                    setOrders(data)
                }
            } catch (e) {
                console.error(e)
            }
        }
        fetchOrders()
    }, [])

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
                                <th className="px-6 py-4 font-medium">User</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Total</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {orders.length === 0 && (
                                <tr><td colSpan={5} className="p-6 text-center text-slate-500">No orders found.</td></tr>
                            )}
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">#{order.id}</td>
                                    <td className="px-6 py-4 text-slate-500">{order.username || order.user_email || 'Unknown'}</td>
                                    <td className="px-6 py-4 text-slate-500">{new Date(order.created_at).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 font-medium">${order.total_amount}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
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
