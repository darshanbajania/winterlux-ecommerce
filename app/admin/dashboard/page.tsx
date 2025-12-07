"use client"

import { Card } from "@/components/ui/Card"
import { useAuth } from "@/context/AuthContext"
import { ShoppingBag, Users, AlertCircle, DollarSign, Package } from "lucide-react"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from "recharts"

const data = [
    { name: "Mon", sales: 4000 },
    { name: "Tue", sales: 3000 },
    { name: "Wed", sales: 2000 },
    { name: "Thu", sales: 2780 },
    { name: "Fri", sales: 1890 },
    { name: "Sat", sales: 2390 },
    { name: "Sun", sales: 3490 },
]

const pieData = [
    { name: "Jackets", value: 400 },
    { name: "Gloves", value: 300 },
    { name: "Boots", value: 300 },
    { name: "Scarves", value: 200 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function AdminDashboard() {
    const { user } = useAuth()

    if (!user) return null

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
                    <p className="text-slate-500">Welcome back, {user.name}!</p>
                </div>
                <div className="flex gap-3">
                    {/* Date filter could go here */}
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 border-none shadow-sm bg-white">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 mb-1">Total Revenue</p>
                            <h3 className="text-2xl font-bold">$45,231.89</h3>
                            <span className="text-xs text-green-600 font-medium">+20.1% from last month</span>
                        </div>
                    </div>
                </Card>

                <Card className="p-6 border-none shadow-sm bg-white">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
                            <ShoppingBag className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 mb-1">Total Orders</p>
                            <h3 className="text-2xl font-bold">+2350</h3>
                            <span className="text-xs text-green-600 font-medium">+180.1% from last month</span>
                        </div>
                    </div>
                </Card>

                <Card className="p-6 border-none shadow-sm bg-white">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-orange-100 text-orange-600 rounded-full">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 mb-1">Pending Actions</p>
                            <h3 className="text-2xl font-bold">12</h3>
                            <span className="text-xs text-slate-500">Orders & Queries</span>
                        </div>
                    </div>
                </Card>

                <Card className="p-6 border-none shadow-sm bg-white">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-pink-100 text-pink-600 rounded-full">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 mb-1">Active Users</p>
                            <h3 className="text-2xl font-bold">+573</h3>
                            <span className="text-xs text-green-600 font-medium">+201 since last hour</span>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sales Chart */}
                <Card className="col-span-2 p-6 border-none shadow-sm bg-white">
                    <div className="mb-6">
                        <h3 className="text-lg font-bold">Sales Overview</h3>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#64748B", fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748B", fontSize: 12 }} prefix="$" />
                                <Tooltip
                                    contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="sales"
                                    stroke="#2563EB"
                                    strokeWidth={3}
                                    dot={{ fill: "#2563EB", strokeWidth: 2, r: 4, stroke: "#fff" }}
                                    activeDot={{ r: 8 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Categories Pie Chart */}
                <Card className="p-6 border-none shadow-sm bg-white">
                    <div className="mb-6">
                        <h3 className="text-lg font-bold">Sales via Category</h3>
                    </div>
                    <div className="h-[300px] flex justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center gap-4 mt-4">
                        {pieData.map((entry, index) => (
                            <div key={entry.name} className="flex items-center gap-2 text-sm">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <span className="text-slate-500">{entry.name}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Recent Orders Table could go here */}
        </div>
    )
}
