"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export interface CartItem {
    id: string
    name: string
    price: number
    image: string
    color: string
    size: string
    quantity: number
}

interface CartContextType {
    items: CartItem[]
    addToCart: (item: Omit<CartItem, "quantity">) => void
    removeFromCart: (id: string, size: string) => void
    updateQuantity: (id: string, size: string, quantity: number) => void
    clearCart: () => void
    cartCount: number
    cartTotal: number
    isCartOpen: boolean
    setIsCartOpen: (isOpen: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        const savedCart = localStorage.getItem("cart")
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart))
            } catch (e) {
                console.error("Failed to parse cart from local storage", e)
            }
        }
    }, [])

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("cart", JSON.stringify(items))
        }
    }, [items, isMounted])

    const addToCart = (newItem: Omit<CartItem, "quantity">) => {
        setItems((prev) => {
            const existingItem = prev.find(
                (item) => item.id === newItem.id && item.size === newItem.size
            )
            if (existingItem) {
                return prev.map((item) =>
                    item.id === newItem.id && item.size === newItem.size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prev, { ...newItem, quantity: 1 }]
        })
        setIsCartOpen(true)
    }

    const removeFromCart = (id: string, size: string) => {
        setItems((prev) => prev.filter((item) => !(item.id === id && item.size === size)))
    }

    const updateQuantity = (id: string, size: string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(id, size)
            return
        }
        setItems((prev) =>
            prev.map((item) =>
                item.id === id && item.size === size ? { ...item, quantity } : item
            )
        )
    }

    const clearCart = () => {
        setItems([])
    }

    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)
    const cartTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartCount,
                cartTotal,
                isCartOpen,
                setIsCartOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}
