"use client"

import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/Button"
import { X, Plus, Minus, Trash2 } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export function CartDrawer() {
    const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart()

    // Prevent body scroll when cart is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isCartOpen])

    if (!isCartOpen) return null

    return (
        <div className="fixed inset-0 z-[100]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                <div className="p-6 border-b flex items-center justify-between">
                    <h2 className="text-xl font-bold">Shopping Cart</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground">
                            <p className="text-lg font-medium mb-2">Your cart is empty</p>
                            <p className="text-sm mb-6">Looks like you haven't added anything yet.</p>
                            <Button onClick={() => setIsCartOpen(false)}>
                                Continue Shopping
                            </Button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={`${item.id}-${item.size}`} className="flex gap-4">
                                <div className="relative w-24 h-24 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-medium">{item.name}</h3>
                                            <p className="font-bold">${item.price * item.quantity}</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            {item.color} • Size {item.size}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center gap-3 border rounded-lg p-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                                className="p-1 hover:bg-slate-100 rounded transition-colors"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                                className="p-1 hover:bg-slate-100 rounded transition-colors"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id, item.size)}
                                            className="text-red-500 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-6 border-t bg-slate-50">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span className="text-xl font-bold">${cartTotal}</span>
                        </div>
                        <Button className="w-full" size="lg">
                            Checkout
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
