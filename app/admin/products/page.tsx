"use client"

import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Plus, Search, Edit, Trash2, X } from "lucide-react"
import { useState, useEffect } from "react"
import { API_BASE_URL } from "@/lib/utils"

interface Product {
    id: string
    name: string
    price: string
    display_price: string
    category: string // Note: Backend model doesn't have category, maybe add it or use color/description? Model has: id, name, price, display_price, color, image, description, features, sizes, slug.
    stock: number // Backend doesn't have stock? Let's check model. Model: no stock field!
    // Wait, the model I saw earlier:
    // id, name, price, display_price, color, image, description, features, sizes, slug.
    // I need to add stock to model if I want to manage it.
    // For now I will mock stock or use a field. 
    // Let's stick to what's in the model + maybe I should have added stock.
    // For this demo, I will just display "In Stock" hardcoded or derived.
}

export default function AdminProductsPage() {
    const [products, setProducts] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        price: "",
        display_price: "",
        color: "",
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop", // default
        description: "",
        slug: ""
    })

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/products/`)
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.error("Failed to fetch products", error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDelete = async (slug: string) => {
        if (!confirm("Are you sure?")) return
        const token = localStorage.getItem("access_token")
        try {
            const res = await fetch(`${API_BASE_URL}/products/${slug}/`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            if (res.ok) {
                fetchProducts()
            } else {
                alert("Failed to delete")
            }
        } catch (e) {
            console.error(e)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const token = localStorage.getItem("access_token")

        // Basic payload matching model
        const payload = {
            ...formData,
            features: [],
            sizes: []
        }

        try {
            const res = await fetch(`${API_BASE_URL}/products/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            })
            if (res.ok) {
                setShowForm(false)
                fetchProducts()
                setFormData({
                    id: "",
                    name: "",
                    price: "",
                    display_price: "",
                    color: "",
                    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop",
                    description: "",
                    slug: ""
                })
            } else {
                const err = await res.json()
                console.error(err)
                alert("Failed to create product: " + JSON.stringify(err))
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="max-w-7xl mx-auto relative">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Products</h1>
                <Button className="flex items-center gap-2" onClick={() => setShowForm(true)}>
                    <Plus className="w-4 h-4" /> Add Product
                </Button>
            </div>

            {/* Add Product Form Overlay */}
            {showForm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <Card className="w-full max-w-lg p-6 bg-white relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="text-sm font-medium">ID (Unique String)</label>
                                <Input value={formData.id} onChange={e => setFormData({ ...formData, id: e.target.value })} placeholder="e.g. urban-coat" required />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Name</label>
                                <Input value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Product Name" required />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Slug</label>
                                <Input value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} placeholder="product-slug" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium">Price (Number)</label>
                                    <Input type="number" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} required />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Display Price</label>
                                    <Input value={formData.display_price} onChange={e => setFormData({ ...formData, display_price: e.target.value })} placeholder="$100.00" required />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium">Color</label>
                                <Input value={formData.color} onChange={e => setFormData({ ...formData, color: e.target.value })} required />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Description</label>
                                <Input value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} required />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Image URL</label>
                                <Input value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} required />
                            </div>
                            <Button className="w-full">Save Product</Button>
                        </form>
                    </Card>
                </div>
            )}

            <Card className="border-none shadow-sm bg-white overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                        <Input placeholder="Search products..." className="pl-10" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 font-medium">Image</th>
                                <th className="px-6 py-4 font-medium">Name</th>
                                <th className="px-6 py-4 font-medium">Price</th>
                                <th className="px-6 py-4 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {products.length === 0 && !isLoading && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                                        No products found. Add one to get started.
                                    </td>
                                </tr>
                            )}
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <img src={product.image} alt={product.name} className="w-10 h-10 rounded object-cover bg-slate-100" />
                                    </td>
                                    <td className="px-6 py-4 font-medium text-slate-900">{product.name}</td>
                                    <td className="px-6 py-4 font-medium">{product.display_price}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-8 w-8 p-0 text-slate-500 hover:text-red-600"
                                                onClick={() => handleDelete(product.slug)}
                                            >
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
