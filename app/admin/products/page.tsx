"use client"

import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Plus, Search, Edit, Trash2 } from "lucide-react"

export default function AdminProductsPage() {
    const products = [
        { id: 1, name: "Arctic Parka", price: "$299.00", stock: 45, category: "Jackets", status: "In Stock" },
        { id: 2, name: "Thermal Gloves", price: "$49.00", stock: 120, category: "Accessories", status: "In Stock" },
        { id: 3, name: "Winter Boots", price: "$189.00", stock: 23, category: "Footwear", status: "Low Stock" },
        { id: 4, name: "Wool Scarf", price: "$35.00", stock: 0, category: "Accessories", status: "Out of Stock" },
        { id: 5, name: "Down Jacket", price: "$249.00", stock: 56, category: "Jackets", status: "In Stock" },
    ]

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Products</h1>
                <Button className="flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add Product
                </Button>
            </div>

            <Card className="border-none shadow-sm bg-white overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                        <Input placeholder="Search products..." className="pl-10" />
                    </div>
                    <div className="flex gap-2">
                        {/* Filters could go here */}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 font-medium">Product Name</th>
                                <th className="px-6 py-4 font-medium">Category</th>
                                <th className="px-6 py-4 font-medium">Price</th>
                                <th className="px-6 py-4 font-medium">Stock</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">{product.name}</td>
                                    <td className="px-6 py-4 text-slate-500">{product.category}</td>
                                    <td className="px-6 py-4 font-medium">{product.price}</td>
                                    <td className="px-6 py-4 text-slate-500">{product.stock}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium 
                                            ${product.status === 'In Stock' ? 'bg-green-50 text-green-700' :
                                                product.status === 'Low Stock' ? 'bg-orange-50 text-orange-700' :
                                                    'bg-red-50 text-red-700'}`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-500 hover:text-blue-600">
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-500 hover:text-red-600">
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
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
